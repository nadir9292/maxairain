import {
  FormGroup,
  Col,
  Row,
  Input,
  Card,
  CardBody,
  Label,
  Media,
} from "reactstrap"
import { useState, useRef } from "react"
import axios from "axios"
import * as faceapi from "face-api.js"
import UseApi from "./UseApi"
import Text from "./Text"
import Button from "./Button"

const CreateUser = () => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState(null)
  const [last_name, setLastName] = useState(null)
  const [job, setJob] = useState(null)
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
            return
          }

          const faceMatcher = new faceapi.FaceMatcher(image1Detections)

          const results = image2Detections.map((detection) => {
            const bestMatch = faceMatcher.findBestMatch(detection.descriptor)
            return {
              detection,
              bestMatch,
            }
          })

          console.log(results[0].bestMatch.distance.toFixed(2))
          if (results[0].bestMatch.distance.toFixed(2) < 0.4) {
            console.log("You are " + picture_faces[index].first_name)
            return
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append("first_name", name)
    formData.append("last_name", last_name)
    formData.append("poste", job)
    formData.append("image", image)

    axios
      .post("YOUR_API_ENDPOINT", formData)
      .then((response) => {
        // Traitement de la réponse
        console.log(response.data)
      })
      .catch((error) => {
        // Gestion de l'erreur
        console.error(error)
      })
  }

  const captureImage = () => {
    const video = videoRef.current

    if (video) {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

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

  const stopCamera = () => {
    const video = videoRef.current

    if (video) {
      const stream = video.srcObject
      const tracks = stream.getTracks()

      tracks.forEach((track) => track.stop())
      video.srcObject = null
    }
  }

  return (
    <div className="container bg-red-200 p-5">
      <Text variant="login_register" size="xl">
        CREATE USER
      </Text>
      <Card className="mt-3">
        <CardBody>
          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label
                  className="block text-md m-1 font-medium leading-6 text-gray-900"
                  for="first_name"
                >
                  Prénom
                </Label>
                <Input
                  defaultValue={name}
                  id="first_name"
                  name="first_name"
                  placeholder="Enter your first_name..."
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label
                  className="block text-md m-1 font-medium leading-6 text-gray-900"
                  for="last_name"
                >
                  Nom
                </Label>
                <Input
                  defaultValue={last_name}
                  id="last_name"
                  name="last_name"
                  placeholder="Enter your last_name..."
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label
                  className="block text-md m-1  font-medium leading-6 text-gray-900"
                  for="poste"
                >
                  Poste
                </Label>
                <Input
                  defaultValue={job}
                  id="poste"
                  name="poste"
                  placeholder="Enter your job..."
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setJob(e.target.value)}
                />
              </FormGroup>
            </Col>
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
          <Button variant="btnSubmit" size="lg" onClick={handleSubmit}>
            Submit
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default CreateUser
