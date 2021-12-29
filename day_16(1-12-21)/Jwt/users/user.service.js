const pool = require("../config/database")



module.exports = {
    create: (data,callback)=>{
        username = data.UserName
        location = data.Location
        let sql_query = `INSERT INTO Users (UserName , Location) VALUES ('${username}','${location}')`;
        pool.query(sql_query,(err,result)=>{
            if (err){
                return callback(err);
            }else{
                return callback(null,result)
            }
        })
    },
    getUsers: callback => {
        let sql_query = `SELECT * FROM Users;`
        pool.query(sql_query,(err,result)=>{
            if (err){
                return callback(err);
            }else{
                return callback(null,result)
            } 
        })
    },
    getUserById: (id,callback)=>{
        let sql_query = `SELECT * FROM Users where id = '${id}';`
        pool.query(sql_query,(err,result)=>{
            if (err){
                return callback(err);
            }else{
                return callback(null,result[0])
            } 
        })
    },
    updateUser: (data,callback) =>{
        let username = data.UserName
        let location = data.Location
        let id = data.ID
        let sql_query = `UPDATE Users SET UserName = '${username}', Location = '${location}' where ID = ${id};`
        pool.query(sql_query,(err,result)=>{
            if (err){
                return callback(err);
            }else{
                return callback(null,result[0])
            } 
        })
    },
    deleteUser: (id,callback)=>{
        let sql_query = `DELETE FROM Users where id = ${id};`
        pool.query(sql_query,(err,result)=>{
            if (err){
                return callback(err);
            }else{
                return callback(null,result[0])
            } 
        })
    },
    getUserByCity: (data,callback) =>{
        let location = data.Location
        let sql_query = `select * from Users where Location = '${location}';`
        pool.query(sql_query,(err,result)=>{
            if(err){
                callback(err)
            }
            return callback(null,result[0])
        })
    }
}