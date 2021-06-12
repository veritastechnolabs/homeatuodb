const pool = require("../../config/dbconfig");
module.exports = {
  createDevType: (data, callback) => {
    pool.query(
      "insert into devicetype(devtypehex,devtype,image,createat,status) values(?,?,?,?,?)",
      [data.devtypehex, data.devtype, data.image, data.createat, data.status],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getDevType: (callback) => {
    pool.query(
      "select * from devicetype order by devtypeid",
      [],
      (error, result, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getDeveTypeById: (devtypeid, callback) => {
    pool.query(
      "select * from devicetype where devtypeid=?",
      [devtypeid],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  updateDevType: (body, callback) => {
    pool.query(
      "update devicetype set 	devtypehex=?,devtype=?,	image=?,createat=?,status=?",
      [body.devtypehex, body.devtypeid, body.image, body.createat, body.status],
      (error, result, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  deleteDevType: (devtypeid, callback) => {
    pool.query(
      "delete from devicetype where devtypeid=?",
      [devtypeid],
      (error, result, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
};
