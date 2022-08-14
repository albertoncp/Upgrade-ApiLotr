const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const app = express();

const {connectDB} = require("./src/utils/database/database")

const PORT = process.env.PORT || 8080

app.use("/",(req,res) => {
    return res.status(200).json("Mi api de EL señor de los anillos")
})

app.use("*", (req,res,next) => {
    return res.status(404).json("route not found")
})

app.use("*", (error,req,res,next) => { //PAra cualquier error que suceda en la aplicación 
    return res.status(error.status || 500).json (error.message || "unexpected error")
})

app.listen(PORT,() => {
    console.log(`Servidor iniciado en ${PORT}`)
})