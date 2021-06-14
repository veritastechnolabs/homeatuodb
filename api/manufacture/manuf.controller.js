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
      if(error){
        return res.status(500).json({
            "success":0,
            "message":"Database connection error"
        })
    }
    return res.status(200).json({
        "success":1,
        "data":{'Manufacture':results.insertId}
    })
})
  },

  getManuf: (req, res) => {
    getManuf((err, result) => {
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
  getMenufById: (req, res) => {
    const manfdevid = req.params.manfdevid;
    getMenufById(manfdevid, (err, result) => {
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
  updateMenuf: (req,res) => {
    const body = req.body;
    updateMenuf(body, (err, result) => {
      if(error){
        return res.json({
            "success":0,
            "message":"Error"
        })
    }
    if(results.affectedRows != 0){
        return res.status(200).json({
            success:1,
            message:results.affectedRows+" "+'Manufacture Updated Successfully!'
        })
    }

    return res.status(404).json({
        "success":1,
        "message":"Record Doesn't Exist!!"
    })
})
  },
  deleteMenuf: (req,res) => {
    const manfdevid = req.params.manfdevid;
    deleteMenuf(manfdevid, (err, result) => {
      if(error){
        return res.json({
            "success":0,
            "message":"error"
        })
    }
    if(results.affectedRows != 0){
        return res.status(200).json({
            success:1,
            message:result.affectedRows+" "+'Manufacture Deleted Successfully!'
        })
    }
    return res.status(404).json({
        "success":0,
        "message":"Record Doesn't Exist!!"
    })
})
  },
};
