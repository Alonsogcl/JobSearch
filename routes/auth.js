const express =require("express")

const AuthService =require ("../services/auth") //Importar el servicio de autenticación

function auth(app){
  const router = express.Router()
  const authServ=new AuthService() //Generando la instancia

  app.use("/api/auth", router) //Usamos el router asignado a esa ubicación

  //Pasamos todas las rutas, en este caso para el login
  router.post("/login", (req, res)=>{
    const token = authServ.login(req.body)
    return res.json(token)
  })
}

module.exports = auth