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

app.get("/api/v1/adoption_application", (req, res) => {
  const queryString = "SELECT * FROM adoption_applications"
  pool.query(queryString).then(result => {
    res.send(result)
  })
})

app.post("/api/v1/adoption_application", (req, res) => {
  const { name, phoneNumber, email, homeStatus, petId } = req.body
  const adoptQueryString = "INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id) VALUES ($1, $2, $3, $4, $5, $6)"
  const applicationStatus = "pending"

  pool.query(adoptQueryString, [name, phoneNumber, email, homeStatus, applicationStatus, petId]).then(result => {
    res.sendStatus(201)
  })
    .catch(error => {
      console.log(error)
      res.sendStatus(500)
    })
})

app.post("/api/v1/adoption_application_approval", (req, res) => {
  const { petId, applicationId, approvalStatus } = req.body
  const queryString1 = `UPDATE adoptable_pets SET adoption_status= '${approvalStatus}' where id = ${petId}`
  const queryString2 = `UPDATE adoption_applications SET application_status='${approvalStatus}' where id=${applicationId}`

  pool.query(queryString1).then(result => {
    
    pool.query(queryString2).then(result => {
      res.sendStatus(201)
    })
    .catch(error => {
      res.sendStatus(500)
      console.log(error)
    })
  }) .catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
})

app.post("/api/v1/pet_surrender_applications", (req, res) => {
  const { name, phoneNumber, email, petName, petAge, petType, petImage, vaccinationStatus } = req.body
  const newPetAdoptQuery = "INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_type_id, pet_image_url, vaccination_status, application_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
  const newPetAdoptAppStatus = "pending"

  pool.query(newPetAdoptQuery, [name, phoneNumber, email, petName, petAge, petType, petImage, vaccinationStatus, newPetAdoptAppStatus])
    .then(result => {
      res.sendStatus(201)
    })
    .catch(error => {
      res.sendStatus(500)
      console.log(error)
    })

})

app.get('*', (req, res) => {
  res.render("home")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

export default app 