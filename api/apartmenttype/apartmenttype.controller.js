const {  getapartmenttype,createapartmenttype,updateapartmenttype,deleteapartmenttype,getapartmenttypebyid } = require("./apartmenttype.service");

module.exports = {
  

    getapartmenttype:(req,res)=>{
        getapartmenttype((err,results)=>{
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
    createapartmenttype:(req,res)=>{
        const body=req.body;
        createapartmenttype(body,(error,results)=>{
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
    updateapartmenttype:(req,res)=>{
        const body=req.body;
        updateapartmenttype(body,(error,results)=>{
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

    deleteapartmenttype:(req,res)=>{
        const apttypeid=req.params.apttypeid;
        deleteapartmenttype(apttypeid,(error,results)=>{
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
    getapartmenttypebyid:(req,res)=>{
        const apttypeid=req.params.apttypeid;
        getapartmenttypebyid(apttypeid,(error,results)=>{
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