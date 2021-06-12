const {  getroom,createroomtype,updateroomtype,deleteroomtype,getroomtypebyid } = require("./roomtype.service");

module.exports = {
  

    getroomtype:(req,res)=>{
        getroomtype((err,results)=>{
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
    createroomtype:(req,res)=>{
        const body=req.body;
        createroomtype(body,(error,results)=>{
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
    updateroomtype:(req,res)=>{
        const body=req.body;
        updateroomtype(body,(error,results)=>{
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

    deleteroomtype:(req,res)=>{
        const roomtypeid=req.params.roomtypeid;
        deleteroomtype(roomtypeid,(error,results)=>{
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
    getroomtypebyid:(req,res)=>{
        const roomtypeid=req.params.roomtypeid;
        getroomtypebyid(roomtypeid,(error,results)=>{
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