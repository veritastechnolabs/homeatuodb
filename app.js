<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
=======
const express= require('express');
require("dotenv").config();
const app= express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

const aptrouter= require("./api/apartment/apartment.router");
>>>>>>> 19a78c063db61812721a1beddd5e749b7aab43fb
const wificredrouter = require("./api/wificred/wificred.router");
const manfdevicerouter= require("./api/manufacture/manuf.router");
const userrouter= require("./api/user/user.router");
const roomtyperouter= require("./api/roomtype/roomtype.router");
const roomrouter= require("./api/room/room.router");
const devicerouter= require("./api/device/device.router");
const apttyperouter= require("./api/apartmenttype/apartmenttype.router");

<<<<<<< HEAD
=======
app.use("/api/apartment",aptrouter);
>>>>>>> 19a78c063db61812721a1beddd5e749b7aab43fb
app.use("/api/wificred", wificredrouter);
app.use("/api/manfdevice",manfdevicerouter)
app.use("/api/user",userrouter);
app.use("/api/roomtype",roomtyperouter);
app.use("/api/room",roomrouter);
app.use("/api/device",devicerouter);
app.use("/api/apttype",apttyperouter);
<<<<<<< HEAD
app.get("/api", (req, res) => {
    console.log(req.body);
  res.json({
    success: 1,
    message: "testing...",
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log("connection done", process.env.APP_PORT);
});
=======

app.get("/api",(req,res)=>{
    res.json({
        success:1,
        message:"It's Working Fine!!"
    })
})

app.listen(process.env.APP_PORT,()=>{
    console.log("Server is running!!", process.env.APP_PORT);
})
>>>>>>> 19a78c063db61812721a1beddd5e749b7aab43fb
