const express = require ("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();


// Setup express server

const app = express();


// Runs expres.json() for ANY incomming request
// parses any JSON in the body and converts it to a javascript object and stores
// it in req.body
app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}));


app.listen(5000, () => console.log("server started on port 5000"));


// replaced with snippet router below
/*
app.get("/test", (req, res) => {
    //console.log("test");
    res.send("Hello World!");
});
*/
// calls the snippetRouter function
app.use("/snippet", require("./routers/snippetRouter"))


mongoose.connect(process.env.MDB_CONNECT_STRING, (err) => {
    if(err)
    {
        return console.error(err);
    }
    console.log("Connected to to MongoDB");
});