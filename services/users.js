//Importar el modelo
const UserModel = require("../models/user") //Y ya podemos comenzar a consultarlo

//Para crearlo se necesita un modelo de usuario
class Users { //Clase que nos permita agrupar la funcionalidad necesaria
  async getAll() { //Obtener toda la información de los usuarios
    try {//es obligatorio usar el try catch manejo de errores

      const users = await UserModel.find() //dentro del método find() va la consulta que queremos ejecutar
      //Ya tenemos disponibles los datos

      return users //Devuelve un Array de objetos

    } catch (error) {
      console.log(error)
    }
  }

  async create(data) { //Crear usuario y recibe los datos del usuario
    try {//es obligatorio usar el try catch manejo de errores

      const user = await UserModel.create(data) //Crea un usuario

      return user //Devuelve un objeto con los datos

    } catch (error) {
      console.log(error)
    }
  }

  async update(id, data) {
    try {//es obligatorio usar el try catch manejo de errores

      const user = await UserModel.findByIdAndUpdate(id, data, { new: true }) //new:true para que devuelva el nuevo elemento

      return user //Devuelve un objeto con los datos

    } catch (error) {
      console.log(error)
    }
  }

  async delete(id) {
    try {//es obligatorio usar el try catch manejo de errores

      const user = await UserModel.findByIdAndDelete(id)

      return user //Devuelve un objeto con los datos

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Users //Se exporta el servicio como un todo