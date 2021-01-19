const router = require("express").Router()

const Model = require("../../utils/model")
const Categories = new Model("categories")

router.get("/", (req, res, next) => {})
router.post("/", async (req, res, next) => {
  try {
    const response = await Categories.save(req.body)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e.message)
  }
})
router.put("/", (req, res, next) => {})
router.delete("/", (req, res, next) => {})

module.exports = router
