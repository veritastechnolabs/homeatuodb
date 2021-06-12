require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const wificredrouter = require("./api/wificred/wificred.router");
const manfdevicerouter= require("./api/manufacture/manuf.router")

app.use("/api/wificred", wificredrouter);
app.use("/api/manfdevice",manfdevicerouter)
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
