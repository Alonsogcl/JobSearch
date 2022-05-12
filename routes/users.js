//Recibo la parte de la aplicación y se configura aquí

const express = require("express") //Importar expresss
const UserService = require("../services/users") //Importar el servicio
/*
function users(){
  const router = express.Router()
}
module.exports = users
*/

/*Forma que no debe ser **************

const router=express.Router()

router.get("/users", (req, res)=>{
  return res.json({
    hola:"mundo"
  })
})

module.exports = router *************/

function users(app) { //se pasa como dependencia la aplicación
  const router = express.Router()
  const userServ = new UserService() //creamos el servicio de usuario

  //se configura la aplicación
  app.use("/api/users", router) //aqui se le dice que use el router y si cambio la ruta de la aplicación, se cambia aquí 
  //y ya no tengo que ir al index a cambiarlo, en su lugar solo se pasa la app users(app) en el index

  router.get("/", async (req, res) => { //Método asincrono
    const users = await userServ.getAll() //Array de usuarios

    return res.json(users)
    /* return res.json({
       hola:"mundo"
     })*/
  })

  router.post("/", async (req, res) => {
    const user = await userServ.create(req.body)

    return res.json(user)
    /* return res.json({
      hola:"mundo"
    })*/
  })

  router.put("/:id", async (req, res) => {

    const user = await userServ.update(req.params.id, req.body)
    return res.json(user)
  })

  router.delete("/:id", async (req, res) => {
    const user = await userServ.delete(req.params.id)
    return res.json(user)
  })
}

module.exports = users