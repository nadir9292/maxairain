import { FormGroup, Col, Row, Card, CardBody, Media } from "reactstrap"
import { useState, useRef, useCallback } from "react"
import * as faceapi from "face-api.js"
import UseApi from "./UseApi"
import Text from "./Text"
import Button from "./Button"
import { makeClient } from "../services/makeClient"

const Login = (props) => {
  const { saveJwt } = props
  const [image, setImage] = useState(null)
  const [error, setError] = useState("")
  const videoRef = useRef(null)
  const picture_faces = UseApi([{}], "get", `/users`)

  const loadFaceApiModels = async () => {
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    ])
  }

  const compareImages = async (img1) => {
    try {
      await loadFaceApiModels()
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      for (const index in picture_faces) {
        if (picture_faces[index].picture_face) {
          const image1El = await faceapi.fetchImage(img1)
          const image2El = await faceapi.fetchImage(
            picture_faces[index].picture_face
          )

          const image1Detections = await faceapi
            .detectAllFaces(image1El)
            .withFaceLandmarks()
            .withFaceDescriptors()
          const image2Detections = await faceapi
            .detectAllFaces(image2El)
            .withFaceLandmarks()
            .withFaceDescriptors()

          if (image1Detections.length === 0 || image2Detections.length === 0) {
            console.log("No faces detected in one or both images.")
            return false
          }

          const faceMatcher = new faceapi.FaceMatcher(image1Detections)

          const results = image2Detections.map((detection) => {
            const bestMatch = faceMatcher.findBestMatch(detection.descriptor)
            return {
              detection,
              bestMatch,
            }
          })

          if (results[0].bestMatch.distance.toFixed(2) < 0.4) {
            return picture_faces[index].id
          }
        }
      }

      return false // Aucune bonne comparaison trouvée
    } catch (error) {
      console.error(error)
      return false // Erreur lors de l'exécution de la méthode
    }
  }

  const handleFormSubmit = async (image) => {
    try {
      const result = await compareImages(image)
      console.log("RESULT = " + result)
      setError(null)

      const {
        data: { jwt, userId },
      } = await makeClient().post("/login", { result })

      if (!jwt) {
        throw new Error("Missing jwt")
      }
      saveJwt(jwt, userId)
      setError(null)
    } catch (err) {
      const { response: { data } = {} } = err
      console.log("ERROR = ", err.response.data.error)
      setError("Something went wrong...")
    }
  }

  const captureImage = () => {
    const video = videoRef.current

    if (video) {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.scale(-1, 1) // Inverse l'affichage horizontalement
      ctx.drawImage(video, 0, 0, -canvas.width, canvas.height) // Utilise des coordonnées inversées pour le dessin

      const capturedImage = canvas.toDataURL("image/jpeg")
      setImage(capturedImage)
    }
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      const video = videoRef.current

      if (video) {
        video.srcObject = stream
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container bg-red-200 p-5">
      <Text variant="login_register" size="xl">
        Login
      </Text>
      <Card className="mt-3">
        <CardBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Media className="mt-4 ml-1" body>
                  {image === null ? (
                    <video ref={videoRef} autoPlay></video>
                  ) : (
                    <img src={image} alt="" />
                  )}
                  <div
                    className="d-flex mt-3 align-items-center"
                    style={{ gap: "10px" }}
                  >
                    {image === null ? (
                      <div className="grid grid-flow-row-dense">
                        <Button
                          variant="btnValidation"
                          size="md"
                          onClick={startCamera}
                          className="mr-75"
                          color="primary"
                        >
                          Start Camera
                        </Button>
                        <Button
                          variant="btnValidation"
                          size="md"
                          onClick={captureImage}
                          className="mr-75"
                          color="primary"
                        >
                          Capture
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => compareImages(image)}
                        className="mr-75"
                        size="sm"
                        color="primary"
                      >
                        Compare
                      </Button>
                    )}
                  </div>
                </Media>
              </FormGroup>
            </Col>
          </Row>
          <Button
            variant="btnSubmit"
            size="lg"
            onClick={() => handleFormSubmit(image)}
          >
            Submit
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Login
