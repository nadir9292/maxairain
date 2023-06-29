import React, { useState } from "react"
import UseApi from "./UseApi"
import Text from "./Text"
import Button from "./Button"
import Popup from "./Popup"
import { makeClient } from "../services/makeClient"

const Stock = (props) => {
  const { userId } = props
  const items = UseApi([{}], "get", `/items`)
  const itemByUser = UseApi([{}], "get", `/items/${userId}`)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  const handleCheckboxChange = (itemId, label, quantity) => {
    if (selectedItems.some((item) => item.id === itemId)) {
      setSelectedItems(selectedItems.filter((item) => item.id !== itemId))
    } else {
      setSelectedItems([...selectedItems, { id: itemId, label, quantity }])
    }
  }

  const handleButtonClick = async (uid) => {
    try {
      setIsLoading(true)
      setError(null)
      const itemsSelected = selectedItems.map((item) => ({
        label: item.label,
        id: item.id,
        quantity: item.quantity,
      }))

      const {
        data: { jwt, userId },
      } = await makeClient().post(`/chooseItems/${uid}`, { itemsSelected })

      setShowPopup(true)
      await delay(1500)
      setError(null)
    } catch (err) {
      const { response: { data } = {} } = err
      console.log("ERROR = " + err)
      setError("Something went wrong...")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2">
      {error && (
        <Popup
          btnMsg="OK 🙂"
          isDisabled={false}
          msg="Nice 🙂"
          color="bg-green-400"
        />
      )}
      {showPopup && !error && (
        <Popup
          msg="Welcome 🙂"
          btnMsg="OK"
          isDisabled={true}
          color="bg-green-400"
        />
      )}
      {items.map(({ id, label, quantity }, index) => (
        <div key={id}>
          <label>
            <ul className=" mb-2 mx-2 hover:scale-105 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.some((item) => item.id === id)}
                    onChange={() => handleCheckboxChange(id, label, quantity)}
                  />
                  <Text variant="items" size="md">
                    id : {id} - {label} - {quantity}
                  </Text>
                </div>
              </li>
            </ul>
          </label>
        </div>
      ))}
      <Button
        variant="btnSubmit"
        size="lg"
        onClick={() => handleButtonClick(userId)}
      >
        Valider
      </Button>
      <p className="mb-5"></p>
    </div>
  )
}

export const scoreVariant = {
  normal: {
    opacity: 1,
    scale: 0.5,
  },
  change: {
    opacity: 1,
    borderRadius: 50,
    scale: 1,
  },
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001,
  },
}
export const counterQuestion = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}
export const interrogationVariant = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  scale: {
    type: "spring",
    damping: 2,
    stiffness: 100,
    restDelta: 0.001,
  },
}
export const answerVariant = {
  whileHover: {
    scale: 1.2,
    color: "#fcba03",
  },
  whileTap: { scale: 0.8 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}
export const listAnswers = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
}

export default Stock
