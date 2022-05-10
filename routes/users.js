//Recibo la parte de la aplicación y se configura aquí

const express = require("express") //Importar expresss

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

function users(app){ //se pasa como dependencia la aplicación
  const router=express.Router()

  //se configura la aplicación
  app.use("/users", router) //aqui se le dice que use el router y si cambio la ruta de la aplicación, se cambia aquí 
                  //y ya no tengo que ir al index a cambiarlo, en su lugar solo se pasa la app users(app) en el index

  router.get("/", (req, res)=>{
    return res.json({
      hola:"mundo"
    })
  })

  router.put("/", (req, res)=>{
    return res.json({
      hola:"mundo"
    })
  })

  router.post("/", (req, res)=>{
    return res.json({
      hola:"mundo"
    })
  })

  router.delete("/", (req, res)=>{
    return res.json({
      hola:"mundo"
    })
  })
}

module.exports = users