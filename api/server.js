const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./models")


const app = express()

const corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions))


db.sequelize.sync()

// // Drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({message: "server js"})
})

const PORT = process.env.PORT || 8080

require("./routes/car.routes")(app)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})