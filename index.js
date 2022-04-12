require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/router')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', router)

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err.message))

app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}. `)
})