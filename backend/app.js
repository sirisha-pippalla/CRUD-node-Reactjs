require("dotenv").config();
const express = require('express');
const connectToDB = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const app = express();

//middleware
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE")

    next();
})


connectToDB();

app.use("/", userRoutes);

module.exports = app