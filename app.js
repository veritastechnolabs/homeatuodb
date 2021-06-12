require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const wificredrouter = require("./api/wificred/wificred.router");
const manfdevicerouter= require("./api/manufacture/manuf.router");
const userrouter= require("./api/user/user.router");
const roomtyperouter= require("./api/roomtype/roomtype.router");
const roomrouter= require("./api/room/room.router");
const devicerouter= require("./api/device/device.router");
const apttyperouter= require("./api/apartmenttype/apartmenttype.router");

app.use("/api/wificred", wificredrouter);
app.use("/api/manfdevice",manfdevicerouter)
app.use("/api/user",userrouter);
app.use("/api/roomtype",roomtyperouter);
app.use("/api/room",roomrouter);
app.use("/api/device",devicerouter);
app.use("/api/apttype",apttyperouter);
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
