const express = require("express")
const app = express()
const HotelsCollection = require("./HotelsCollection.js")
const Hotel = require("./Hotel.js")

const collection = new HotelsCollection()
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.use(express.static("public"))

app.listen(3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!")
})

app.post("/create-hotel", function(req, res) {
    // const {name, city, rating} = req.body
    let name = req.body["hotel-name"]
    let city = req.body["hotel-city"]
    let rating = req.body["hotel-rating"]
    const newHotel = new Hotel(name, city, rating)
    collection.addHotel(newHotel)
    res.send(newHotel)
})

app.get("/list-hotels", function(req, res){
    res.send(collection.hotels)
})

// app.get("/", function(req, res){
//     console.log("getting a request on /")
//     res.send("Hello you")
// })