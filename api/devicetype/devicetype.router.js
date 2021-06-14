const {
  createDevType,
  getDevType,
  getDeveTypeById,
  updateDevType,
  deleteDevType,
} = require("./devicetype.controller");
const router = require("express").Router();

router.post("/createDevType", createDevType);
router.get("/getDevType", getDevType);
router.get("/getDeveTypeById/:devtypeid", getDeveTypeById);
router.patch("/updateDevType", updateDevType);
router.delete("/deleteDevType/:devtypeid", deleteDevType);
module.exports = router;
