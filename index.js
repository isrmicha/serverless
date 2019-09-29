const express = require("express")
const { random } = require("colors")
const app = express()

const PORT = 80
const USERS = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Williams"
  }
]

app.get("/", ({ res }) => res.json({ msg: "teste" }))
app.get("/:id", ({ params: { id } }, res) => res.json({ msg: id }))
app.get("/users", ({ res }) => res.json(USERS))
app.listen(PORT, () => console.log(random(`Servidor rodando em http://local`)))

module.exports = {
  app
}
