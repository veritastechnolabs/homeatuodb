const pool = require("../../config/dbconfig");
module.exports = {
  
    getroom:callBack=>{
        pool.query(
            `select rm.roomname,rm.roomtypeid,rm.aptid,rm.description,rm.createdat,rm.status,rt.roomtype,aa.aptname 
            from room rm join roomtype rt on rm.roomtypeid=rt.roomtypeid join apartment aa on rm.aptid=aa.aptid`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                
                return callBack(null,results);
            }
        )
    },
    createroom:(body,callback)=>{
        pool.query(
            'INSERT INTO room (roomname,roomtypeid,aptid,description,createdat,status) values(?,?,?,?,?,?)',
            [
                body.roomname,
                body.roomtypeid,
                body.aptid,
                body.description,
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
    updateroom:(body,callback)=>{
        pool.query(
            'UPDATE room SET roomname=?,roomtypeid=?,aptid=?,description=?,createdat=?,status=? where roomid=?',
            [
                body.roomname,
                body.roomtypeid,
                body.aptid,
                body.description,
                body.createdat,
                body.status,
                body.roomid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    deleteroom:(roomid,callback)=>{
        pool.query(
            'DELETE from room WHERE roomid=?',
            [
                roomid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getroombyid:(roomid,callback)=>{
        pool.query(
            'SELECT * FROM room WHERE roomid=?',
            [
                roomid
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