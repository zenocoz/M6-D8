const router = require("express").Router()

const db = require("../../utils/db")

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM tutors;")
    res.send(rows)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM tutors WHERE id=${parseInt(req.params.id, 10)}`
    )
    res.send(rows)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const {
      headline,
      subhead,
      content,
      category,
      author,
      claps,
      reviews,
      cover,
    } = req.body
    const query = `INSERT INTO  articles (headline,subhead,content,category,author,claps,reviews,cover) VALUES ('${headline}','${subhead}','${content}','${category}','${author}',
    '${author}','${claps}','${reviews}','${cover}'
    
    );`
    const result = await db.query(query)
    res.send(result)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const { name, lastName, country } = req.body

    const id = parseInt(req.params.id)

    const query = `UPDATE tutors SET name='${name}', lastname='${lastName}', country='${country}' WHERE id=${id}`

    const result = await db.query(query)
    res.send(result)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `DELETE FROM tutors WHERE id=${parseInt(req.params.id, 10)}`
    )
    res.send(rows)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

module.exports = router
