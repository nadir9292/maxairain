import { useContext } from "react"
import { AppContext } from "../src/components/AppContext"
import NavBar from "../src/components/NavBar"
import { motion } from "framer-motion"
import CreateUser from "../src/components/CreateUser"

const Home = () => {
  const { jwt, logout, userId, saveUser, user } = useContext(AppContext)

  return (
    <div className="bg-mobile bg-cover md:bg-normal md:bg-cover h-screen">
      <NavBar
        jwt={jwt}
        logout={logout}
        pseudo={user ? JSON.parse(user).pseudo : null}
      />
      <div className="flex justify-center mt-10">
        <motion.ul
          className="grid grid-cols-1 gap-4 justify-items-center place-content-center w-2/3"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <motion.li variants={item}>
            <CreateUser />
          </motion.li>
        </motion.ul>
      </div>
    </div>
  )
}

export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
}
export const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
  transition: {
    when: "afterChildren",
  },
}

export default Home
