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
import { useState, useRef, useContext } from "react"
import { makeClient } from "../src/services/makeClient"
import * as faceapi from "face-api.js"
import UseApi from "../src/components/UseApi"
import Text from "../src/components/Text"
import Button from "../src/components/Button"
import { AppContext } from "../src/components/AppContext"
import NavBar from "../src/components/NavBar"

const CreateUser = () => {
  const { jwt, logout, userId, user } = useContext(AppContext)
  const [picture_face, setImage] = useState(null)
  const [first_name, setName] = useState(null)
  const [error, setError] = useState("")
  const [last_name, setLastName] = useState(null)
  const [poste, setJob] = useState(null)
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

          if (results[0].bestMatch.distance.toFixed(2) < 0.4) {
            return
          }
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("first_name", first_name)
    formData.append("last_name", last_name)
    formData.append("poste", poste)
    formData.append("picture_face", picture_face)

    try {
      setError(null)

      const {
        data: { jwt, userId },
      } = await makeClient().post(`/${userId}/create-user`, {
        first_name,
        last_name,
        poste,
        picture_face,
      })

      if (!jwt) {
        throw new Error("Missing jwt")
      }
      saveJwt(jwt, userId)
      setError(null)
    } catch (err) {
      const { response: { data } = {} } = err
      console.log(err)
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

  return (
    <div className="bg-mobile bg-cover md:bg-normal md:bg-cover h-screen">
      <NavBar
        jwt={jwt}
        logout={logout}
        pseudo={user ? JSON.parse(user).firstName : null}
        pictureFace={user ? JSON.parse(user).pictureFace : null}
      />
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
                    defaultValue={first_name}
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
                    defaultValue={poste}
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
                    {picture_face === null ? (
                      <video ref={videoRef} autoPlay></video>
                    ) : (
                      <img src={picture_face} alt="" />
                    )}
                    <div
                      className="d-flex mt-3 align-items-center"
                      style={{ gap: "10px" }}
                    >
                      {picture_face === null ? (
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
                          onClick={() => compareImages(picture_face)}
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
    </div>
  )
}

export default CreateUser
