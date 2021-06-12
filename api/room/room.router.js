const {  getroom,createroom,updateroom,deleteroom,getroombyid } = require("./room.controller");
const router = require("express").Router();

router.get("/getroom",getroom);
router.post("/createroom",createroom);
router.patch("/updateroom",updateroom);
router.delete("/deleteroom/:roomid",deleteroom);
router.get("/getroombyid/:roomid",getroombyid);

module.exports = router;