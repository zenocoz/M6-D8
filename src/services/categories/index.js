const router = require("express").Router()

const Model = require("../../utils/model")
const Categories = new Model("categories")

router.get("/", async (req, res, next) => {
  try {
    const response = await Categories.findOne()
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await Categories.findfindById(req.params.id)
    res.send(rows)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const response = await Categories.save(req.body)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e.message)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const response = await Categories.findByIdAndUpdate(req.params.id, req.body)
    res.send(response)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await Categories.findByIdAndDelete(req.params.id)
    res.send(rows)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

module.exports = router
