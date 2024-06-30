//conexion BD
const mongoose = require ('mongoose')
const url_bd = "mongodb://localhost:27017/base3"
mongoose.connect(url_bd)
.then(() => {
    console.log('si jalo esta madre')
}
).catch((error)=>{
    console.log('no jalo esta madre')
})
//se realizara un esquema de la base de datos
const esquema_perro = new mongoose.Schema
(
    {
 name:{
    type: String
 },
 raza:{
    type: String
 },
 fechaN:{
    type: Date
 }
    }
)

//crear tabla
const modelo_perro = new mongoose.model
("tabla de datos",esquema_perro)

modelo_perro.create({
    name : "pancho",
    raza: "pug",
    fechaN: 20/10/2005
})
