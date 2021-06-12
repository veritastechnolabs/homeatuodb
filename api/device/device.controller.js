const {  getdevice,createdevice,updatedevice,deletedevice,getdevicebyid } = require("./device.service");

module.exports = {
  

    getdevice:(req,res)=>{
        getdevice((err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"Database connection error"
                })
            }
            return res.status(200).json({
                success:1,
                data:{results}
            })
        })
    },
    createdevice:(req,res)=>{
        const body=req.body;
        createdevice(body,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Record inserted successfully"
            })
        })
    },
    updatedevice:(req,res)=>{
        const body=req.body;
        updatedevice(body,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"Error"
                })
            }
            return res.json({
                "success":1,
                "message":"Record updated successfully"
            })
        })
    },

    deletedevice:(req,res)=>{
        const devid=req.params.devid;
        deletedevice(devid,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "message":"Record deleted successfully"
            })
        })
    },
    getdevicebyid:(req,res)=>{
        const devid=req.params.devid;
        getdevicebyid(devid,(error,results)=>{
            if(error){
                return res.json({
                    "success":0,
                    "message":"error"
                })
            }
            return res.json({
                "success":1,
                "data":{results}
            })
        })
    },
 
}