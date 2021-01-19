const router = require("express").Router()

const Model = require("../../utils/model")
const Authors = new Model("authors")

router.get("/", (req, res, next) => {})
router.post("/", async (req, res, next) => {
  try {
    const response = await Authors.save(req.body)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e.message)
  }
})
router.put("/", (req, res, next) => {})
router.delete("/", (req, res, next) => {})

module.exports = router
