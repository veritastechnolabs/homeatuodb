const {
  createManuf,
  getManuf,
  getMenufById,
  updateMenuf,
  deleteMenuf,
} = require("./manuf.service");
module.exports = {
  createManuf: (req, res) => {
    const body = req.body;
    createManuf(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        data: { manfdevid: result.manfdevid },
      });
    });
  },

  getManuf: (req, res) => {
    getManuf((err, result) => {
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
  getMenufById: (req, res) => {
    const manfdevid = req.params.manfdevid;
    getMenufById(manfdevid, (err, result) => {
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
  updateMenuf: (req,res) => {
    const body = req.body;
    updateMenuf(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        message: "MenufDevice Updated Successfully....",
      });
    });
  },
  deleteMenuf: (req,res) => {
    const manfdevid = req.params.manfdevid;
    deleteMenuf(manfdevid, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        message: "Manufacture device deleted successfully....",
      });
    });
  },
};
