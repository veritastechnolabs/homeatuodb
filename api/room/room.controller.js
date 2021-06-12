const {  getroom,createroom,updateroom,deleteroom,getroombyid } = require("./room.service");

module.exports = {
  

    getroom:(req,res)=>{
        getroom((err,results)=>{
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
    createroom:(req,res)=>{
        const body=req.body;
        createroom(body,(error,results)=>{
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
    updateroom:(req,res)=>{
        const body=req.body;
        updateroom(body,(error,results)=>{
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

    deleteroom:(req,res)=>{
        const roomid=req.params.roomid;
        deleteroom(roomid,(error,results)=>{
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
    getroombyid:(req,res)=>{
        const roomid=req.params.roomid;
        getroombyid(roomid,(error,results)=>{
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