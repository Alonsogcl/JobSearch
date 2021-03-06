const { mongoose } = require("../config/db") //Se importa mongoose

const Schema = mongoose.Schema //Es necesario tener un esquema

//Se crea nuestro esquema instancia del esquema
const userSchema = new Schema({ //Estructura
  name:String,
  email:{
    type:String, 
    unique:true //para que no sea repetible
  },
  password:String,
})

const UserModel=mongoose.model("User", userSchema) //Crear Modelo y pasarle el esquema

module.exports=UserModel
