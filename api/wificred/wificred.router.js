const {
  createWifiCred,
  getWifiCred,
  getWifiCredById,
  wificredDelete,
  wificredUpdate,
} = require("./wificred.controller");
const router = require("express").Router();

router.post("/createwifi", createWifiCred);
router.get("/getWifiCred", getWifiCred);
router.get("/getWifiCredById/:wificredid", getWifiCredById);
router.patch("/wificredUpdate", wificredUpdate);
router.delete("/wificredDelete/:wificredid", wificredDelete);

module.exports = router;
