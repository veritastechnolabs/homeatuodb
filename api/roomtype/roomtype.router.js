const {  getroomtype,createroomtype,updateroomtype,deleteroomtype,getroomtypebyid } = require("./roomtype.controller");
const router = require("express").Router();

router.get("/getroomtype",getroomtype);
router.post("/createroomtype",createroomtype);
router.patch("/updateroomtype",updateroomtype);
router.delete("/deleteroomtype/:roomtypeid",deleteroomtype);
router.get("/getroomtypebyid/:roomtypeid",getroomtypebyid);

module.exports = router;