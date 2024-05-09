require("dotenv").config()
const { checkDB, syncModels } = require("./db/index.js")
const express = require('express')
const morgan = require("morgan")
const addRelations = require('./db/relations.js')
const cors = require('cors')

const router = require('./api/routes/index.js')

async function dbConnect() {
    try {
        await checkDB()
        addRelations()
        await syncModels()
    } catch (error) {
        console.log(error)
    }
}

const corsOptions = {
    origin: '*', // Reemplaza con el origen del frontend
    methods: 'GET,POST,PATCH,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};
const app = express()
const port = process.env.PORT

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan("dev"));

app.listen(port, async () => {
  await dbConnect()
  console.log(`--> Servidor arrancado en puerto ${port}`)
})

app.use('/api', router)