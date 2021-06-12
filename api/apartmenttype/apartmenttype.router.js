const { getapartmenttype,createapartmenttype,updateapartmenttype,deleteapartmenttype,getapartmenttypebyid } = require("./apartmenttype.controller");
const router = require("express").Router();

router.get("/getapartmenttype",getapartmenttype);
router.post("/createapartmenttype",createapartmenttype);
router.patch("/updateapartmenttype",updateapartmenttype);
router.delete("/deleteapartmenttype/:apttypeid",deleteapartmenttype);
router.get("/getapatmenttypebyid/:apttypeid",getapartmenttypebyid);

module.exports = router;