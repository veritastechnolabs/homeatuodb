const express= require('express');
require("dotenv").config();
const app= express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

const aptrouter= require("./api/apartment/apartment.router");

app.use("/api/apartment",aptrouter);

app.get("/api",(req,res)=>{
    res.json({
        success:1,
        message:"It's Working Fine!!"
    })
})

app.listen(process.env.APP_PORT,()=>{
    console.log("Server is running!!", process.env.APP_PORT);
})
