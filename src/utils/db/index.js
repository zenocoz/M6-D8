//get pool class from po
const { Pool } = require("pg")

//create instance of Pool class
const pool = new Pool()

module.exports = {
  //query with pool on postgres
  async query(text, params) {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log("executed query in", duration, "ms.")
    return res
  },
}
