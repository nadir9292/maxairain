import { useContext } from "react"
import { AppContext } from "../src/components/AppContext"
import NavBar from "../src/components/NavBar"
import { motion } from "framer-motion"
import Login from "../src/components/Login"
import UseApi from "../src/components/UseApi"

const Home = () => {
  const { jwt, logout, userId, saveJwt, user, saveUser } =
    useContext(AppContext)
  if (userId) {
    const user = UseApi({}, "get", `/users/${userId}`)
    if (user) {
      saveUser(
        JSON.stringify({
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          pictureFace: user.picture_face,
          role: user.role,
        })
      )
    }
  }

  return (
    <div className="bg-mobile bg-cover md:bg-normal md:bg-cover h-screen">
      <NavBar
        jwt={jwt}
        logout={logout}
        role={user ? JSON.parse(user).role : null}
        pseudo={user ? JSON.parse(user).firstName : null}
        pictureFace={user ? JSON.parse(user).pictureFace : null}
      />
      <div className="flex justify-center mt-10">
        <motion.ul
          className="grid grid-cols-1 gap-4 justify-items-center place-content-center w-2/3"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <motion.li variants={item}>
            {userId ? (
              <h1>STOCK</h1>
            ) : (
              <Login jwt={jwt} logout={logout} saveJwt={saveJwt} />
            )}
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
