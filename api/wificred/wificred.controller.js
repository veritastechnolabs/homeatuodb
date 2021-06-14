const {
  createWifiCred,
  getWifiCred,
  getWifiCredById,
  wificredUpdate,
  wificredDelete
} = require("./wificred.service");
module.exports = {
  createWifiCred: (req, res) => {
    const body = req.body;
    console.log(body);
    createWifiCred(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        data: { wificredid: result.insertId },
      });
    });
  },
  
  getWifiCred: (req, res) => {
    getWifiCred((err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        data: { result },
      });
    });
  },

  getWifiCredById: (req, res) => {
   const wificredid = req.params.wificredid;
    getWifiCredById(wificredid,(err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        data: { result },
      });
    });
  },

  wificredUpdate: (req, res) => {
    const body = req.body
    wificredUpdate(body,(err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        message: "WifiCred Upadated successfully....",
      });
    });
  },

  wificredDelete: (req, res) => {
    const wificredid = req.params.wificredid;
    wificredDelete(wificredid,(err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        message: "WifiCred deleted successfully.....",
      });
    });
  },
};
//insertId is fixed inbuild id we cant change it
