const pool = require("../../config/dbconfig");
module.exports = {
  
    getroom:callBack=>{
        pool.query(
            `select * from roomtype`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                
                return callBack(null,results);
            }
        )
    },
    createroomtype:(body,callback)=>{
        pool.query(
            'INSERT INTO roomtype (roomtype,createdat,status) values(?,?,?)',
            [
                body.roomtype,
                body.createdat,
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
    updateroomtype:(body,callback)=>{
        pool.query(
            'UPDATE roomtype SET roomtype=?,createdat=?,status=? where roomtypeid=?',
            [
                body.roomtype,
                body.createdat,
                body.status,
                body.roomtypeid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    deleteroomtype:(roomtypeid,callback)=>{
        pool.query(
            'DELETE from roomtype WHERE roomtypeid=?',
            [
                roomtypeid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getroomtypebyid:(roomtypeid,callback)=>{
        pool.query(
            'SELECT * FROM roomtype WHERE roomtypeid=?',
            [
                roomtypeid
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