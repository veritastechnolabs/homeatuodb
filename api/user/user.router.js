const {  getuser,createuser,updateuser,deleteuser,getuserbyid } = require("./user.controller");
const router = require("express").Router();

router.get("/getuser",getuser);
router.post("/createuser",createuser);
router.patch("/updateuser",updateuser);
router.delete("/deleteuser/:user_id",deleteuser);
router.get("/getuserbyid/:user_id",getuserbyid);

module.exports = router;