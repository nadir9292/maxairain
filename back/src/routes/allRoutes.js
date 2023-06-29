import statusRoute from "./statusRoute.js"
import userRoute from "./userRoute.js"
import itemRoute from "./itemRoute.js"

const allRoutes = ({ app, db }) => {
  userRoute({ app, db })
  statusRoute({ app, db })
  itemRoute({ app, db })
}

export default allRoutes
