const db = require("../db")

class Model {
  constructor(name) {
    this.name = name
  }

  async run(query) {
    try {
      const response = await db.query(query)
      return response
    } catch (e) {
      throw new Error(e)
    }
  }
}
