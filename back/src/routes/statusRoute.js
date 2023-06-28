const statusRoute = ({ app }) => {
  app.get("/", async (req, res) => {
    return res.status(200).send("OK")
  })
}

export default statusRoute
