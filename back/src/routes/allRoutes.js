import statusRoute from "./statusRoute.js"
import userRoute from "./userRoute.js"

const allRoutes = ({ app, db }) => {
  userRoute({ app, db })
  statusRoute({ app, db })
}

export default allRoutes
