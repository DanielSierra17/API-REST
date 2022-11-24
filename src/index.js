const express = require('express')
const mongoose = require('mongoose')
require ("dotenv").config()
const app = express()
const port = 3000

// middleware
app.use('/api')

// routes
app.get('/', function (req, res) {
    res.send('Hola mundo')
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.log(error))

app.listen(port, () => {
    console.log(`Puerto ejecutandose correctamente ${port} ✅✅✅`)
})