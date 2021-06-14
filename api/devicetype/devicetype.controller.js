const { createDevType , getDevType, getDeveTypeById,  updateDevType, deleteDevType} = require("./devicetype.service");

module.exports = {
  createDevType: (req, res) => {
    const body = req.body;
    createDevType(body, (error, result) => {
      if (error) {
        return res.json({
          success: 0,
          message: error,
        });
      }
      return res.json({
        success: 1,
        data: { devtypeid: result.devtypeid },
      });
    });
  },
  getDevType: (req, res) => {
    getDevType((err, result) => {
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
  getDeveTypeById: (req, res) => {
    const devtypeid = req.params.devtypeid;
    getDeveTypeById(devtypeid, (err, result) => {
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
  updateDevType: (req, res) => {
    const body = req.body;
    updateDevType(body, (err, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        message: "DeviceType Updated Successfully...",
      });
    });
  },
  deleteDevType: (req, res) => {
    const devtypeid = req.params.devtypeid;
    deleteDevType(devtypeid, (error, result) => {
      if (err) {
        return res.json({
          success: 0,
          message: err,
        });
      }
      return res.json({
        success: 1,
        message: "DeviceType Deleted Successfully...",
      });
    });
  },
};
