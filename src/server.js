const express = require("express")
const cors = require("cors")
const server = express()

const services = require("./services")

server.use(express.json())
server.use("/api", services)

server.use(cors())
const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log("server listening on port", port)
})
