const express = require("express")

const AuthService = require("../services/auth") //Importar el servicio de autenticación

function auth(app) {
  const router = express.Router()
  const authServ = new AuthService() //Generando la instancia

  app.use("/api/auth", router) //Usamos el router asignado a esa ubicación

  //Pasamos todas las rutas, en este caso para el login
  router.post("/login", (req, res) => {
    const token = authServ.login(req.body)
    return res.json(token)
  })

  router.post("/signup", async (req, res) => {
    const result = await authServ.signup(req.body)
    //return res.json(result) //devolver el resultado del registro del usuario
    return res.status(result.error ? 400 : 200).json(result) //Mandar un estatus si hay error 400, si todo bien 200

  })
}

module.exports = auth