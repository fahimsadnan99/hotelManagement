require("express-async-errors")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv").config()
const Rooms = require("./router/roomRoute")


const app = express()


app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}

app.use(cors())

app.use("/api/room", Rooms)



app.use((err, req, res, next) => {
    return res.status(500).json({
        message : "Something Was Wrong"
    })
})


module.exports = app
