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
      if(error){
        return res.status(500).json({
            "success":0,
            "message":"Database connection error"
        })
    }
    return res.status(200).json({
        "success":1,
        "data":{'WifiCred':results.insertId}
    })
})
  },
  
  getWifiCred: (req, res) => {
    getWifiCred((err, result) => {
      if(err){
        return res.status(500).json({
            success:0,
            message:"Database connection error"
        })
    }
    if(results.length == 0){
        return res.status(404).json({
            success:0,
            message:"Record Doesn't Exist!!"
        })
    }
    return res.status(200).json({
        success:1,
        data:{results}
    })
})
  },

  getWifiCredById: (req, res) => {
   const wificredid = req.params.wificredid;
    getWifiCredById(wificredid,(err, result) => {
      if(error){
        return res.json({
            "success":0,
            "message":"error"
        })
    }
    if(results.length == 0){
        return res.status(404).json({
            "success":0,
            "message":"Record Doesn't Exist!!"
        })
    }
    return res.json({
        "success":1,
        "data":{results}
    })
})
  },

  wificredUpdate: (req, res) => {
    const body = req.body
    wificredUpdate(body,(err, result) => {
      if(error){
        return res.json({
            "success":0,
            "message":"Error"
        })
    }
    if(results.affectedRows != 0){
        return res.status(200).json({
            success:1,
            message:results.affectedRows+" "+'WifiCred Updated Successfully!'
        })
    }

    return res.status(404).json({
        "success":1,
        "message":"Record Doesn't Exist!!"
    })
})
  },

  wificredDelete: (req, res) => {
    const wificredid = req.params.wificredid;
    wificredDelete(wificredid,(err, result) => {
      if(error){
        return res.json({
            "success":0,
            "message":"error"
        })
    }
    if(results.affectedRows != 0){
        return res.status(200).json({
            success:1,
            message:result.affectedRows+" "+'WifiCred Deleted Successfully!'
        })
    }
    return res.status(404).json({
        "success":0,
        "message":"Record Doesn't Exist!!"
    })
})
  },
};
//insertId is fixed inbuild id we cant change it
