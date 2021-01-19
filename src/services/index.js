const router = require("express").Router()
const articlesRouter = require("./articles")
const authorsRouter = require("./authors")
const categoriesRouter = require("./categories")

router.use("/articles", articlesRouter)
router.use("/categories", categoriesRouter)
router.use("/authors", authorsRouter)

module.exports = router
