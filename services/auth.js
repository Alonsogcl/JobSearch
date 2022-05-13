const jwt = require("jsonwebtoken") //Importar la librería JWT
const bcrypt = require("bcrypt") //Importar la libreria bcrypt
const { jwtSecret } = require("../config")
const User = require("./users")

class Auth {
  login(data) {
    return this.#createToken(data) //data del usuario
  }

  async signup(data) {
    if (data.password) {
      data.password = await this.#encrypt(data.password) //contraseña del usuario = contraseña encriptada
    }

    const userServ = new User() //creamos el servicio del usuario
    const user = await userServ.create(data) //Creamos el usuario pasandole los datos ya con la contraseña encriptada
    //Una vez que creamos el usuario es necesario hacer un refresh token

    if(user.error){//Verificamos si es que hay un error
      return user
    }

    //Crear un nuevo objeto con solo los datos que voy a enviar a través del token 
    //Devolvemos los datos necesarios
    const userData = {
      name: user.name,
      email: user.email,
      id: user.id
    }

    const token = this.#createToken(userData)
    return { //devolvemos la data del usuario pero como es de prueba devolvemos el token pero podemos devolver lo que necesitamos
      user: userData,
      token
    }
  }

  #createToken(payload) { //# privado para que no se pueda crear un token desde afuera
    //const token = jwt.sign(data, "12345") //Generar token
    //const token = jwt.sign(data, jwtSecret, { 
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: '7d'
    })
    return token
  }

  async #encrypt(string) {
    try {
      const salt = await bcrypt.genSalt()
      const hash = await bcrypt.hash(string, salt) //Se pasan los datos que vamos a encriptar y las rondas de salt
      return hash
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Auth //Para poder usarlo en las rutas