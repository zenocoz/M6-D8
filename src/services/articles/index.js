const router = require("express").Router()

// const db = require("../../utils/db")
const Model = require("../../utils/model")
const Articles = new Model("articles")

router.get("/", async (req, res, next) => {
  try {
    const response = await Articles.findOne()
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await Articles.findById(req.params.id)
    res.send(rows)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const response = await Articles.save(req.body)
    res.send(response)
  } catch (e) {
    console.log(e)
    res.status(500).send(e.message)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const response = await Articles.findByIdAndUpdate(req.params.id, req.body)
    res.send(response)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await Articles.findByIdAndDelete(req.params.id)
    res.send(rows)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

module.exports = router
