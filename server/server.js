import express from "express"
import path from "path"
import logger from "morgan"
import bodyParser from "body-parser"
import hbsMiddleware from "express-handlebars"
import _ from "lodash"
import pg from 'pg'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  }))

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@127.0.0.1:5432/pet_database"
})

app.get("/", (req, res) => {
  res.redirect("/pets")
})

app.get('/api/v1/pet_types', (req, res) => {
  const petsTypeQuery = "SELECT * FROM pet_types"
  pool.query(petsTypeQuery)
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      console.log(error)
      res.sendStatus(500)
    })
})

app.get('/api/v1/adoptable_pets', (req, res) => {
  const type_id = req.query.type
  let queryString = "SELECT * FROM adoptable_pets WHERE type_id = ($1)"
  pool.query(queryString, [type_id])
    .then(result => {
      res.send(result)
    })
});

app.get("/api/v1/show_page", (req, res) => {
  const petId = req.query.id
  const queryString = "SELECT * FROM adoptable_pets WHERE id = ($1) "
  pool.query(queryString, [petId]).then(result => {
    res.send(result)
  })
})

app.get('*', (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

export default app 
