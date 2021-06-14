const pool = require("../../config/dbconfig");
module.exports = {
  
    getapartmenttype:callBack=>{
        pool.query(
            `select * from apartmenttype`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                
                return callBack(null,results);
            }
        )
    },
    createapartmenttype:(body,callback)=>{
        var cur= new Date();
        var createdate= Date.parse(cur)/1000;
        pool.query(
            'INSERT INTO apartmenttype (apttype,createdat,status) values(?,?,?)',
            [
                body.apttype,
                createdate,
                body.status
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
   updateapartmenttype:(body,callback)=>{
        pool.query(
            'UPDATE apartmenttype SET apttype=?,status=? where apttypeid=?',
            [
                body.apttype,
                body.status,
                body.apttypeid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    deleteapartmenttype:(apttypeid,callback)=>{
        pool.query(
            'DELETE from apartmenttype WHERE apttypeid=?',
            [
                apttypeid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getapartmenttypebyid:(apttypeid,callback)=>{
        pool.query(
            'SELECT * FROM apartmenttype WHERE apttypeid=?',
            [
                apttypeid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },

}