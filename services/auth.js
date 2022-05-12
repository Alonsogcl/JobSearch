const jwt = require("jsonwebtoken") //Importar la librería JWT
const { jwtSecret } = require("../config")

class Auth {
  login(data) {
    //const token = jwt.sign(data, "12345") //Generar token
    const token = jwt.sign(data, jwtSecret, { expiresIn: '7d' })
    return token
  }
}

module.exports = Auth //Para poder usarlo en las rutas