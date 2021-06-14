const {
  createManuf,
  getManuf,
  getMenufById,
  updateMenuf,
  deleteMenuf,
} = require("../manufacture/manuf.controller");
const router = require("express").Router();

router.post("/createManuf", createManuf);
router.get("/getManuf", getManuf);
router.get("/getMenufById/:manfdevid", getMenufById);
router.patch("/updateMenuf", updateMenuf);
router.delete("/deleteMenuf/:manfdevid", deleteMenuf);

module.exports = router;
