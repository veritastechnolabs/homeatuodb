const {  getdevice,createdevice,updatedevice,deletedevice,getdevicebyid } = require("./device.controller");
const router = require("express").Router();

router.get("/getdevice",getdevice);
router.post("/createdevice",createdevice);
router.patch("/updatedevice",updatedevice);
router.delete("/deletedevice/:devid",deletedevice);
router.get("/getdevicebyid/:devid",getdevicebyid);

module.exports = router;