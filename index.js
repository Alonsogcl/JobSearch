const express = require("express")
const { port } = require("./config")
const { connection } = require("./config/db")
const users = require("./routes/users")
const auth = require("./routes/auth") //Importando rutas

connection()

const app = express()

//Middleware de JSON
app.use(express.json())

//Usando routes
//app.use(users) Ya pasamos el control a la ruta con la siguiente linea

users(app)
auth(app) //Usando routes

app.listen(port, () => {
    console.log("Listening: http://localhost:" + port)
})
