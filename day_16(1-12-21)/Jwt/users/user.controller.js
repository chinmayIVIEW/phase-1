const { create,getUsers,getUserById,updateUser,deleteUser,getUserByCity } = require("./user.service")
const bcrypt = require("bcrypt")
const { sign } = require("jsonwebtoken")


module.exports = {
    createUser : (req,res)=>{ 
        const body = req.body
        create(body,(err,result)=>{
            if (err){
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                })
            }
            return res.status(200).json({
                success : 1,
                data : result
            })
        })
    },
    getUserById: (req,res) =>{
        const id = req.params.id      
        getUserById(id,(err,result)=>{
            if (err){
                console.log(err);
                return res.status(500).json({
                    message : "database connection error"
                })
            }else if(!result){
                return res.json({
                    message : "Record not found"
                })
            }else{
                return res.status(200).json({
                    data : result
                })
            }      
        })
    },
    getUsers: (req,res) =>{
        getUsers((err,result)=>{
            if (err){
                console.log(err);
                return res.status(500).json({
                    message : "database connection error"
                })
            }else{
                return res.status(200).json({
                    data : result
                })
            }      
        })
    },
    updateUser: (req,res) =>{
        let data = req.body
        updateUser(data,(err,result) =>{
            if (err){
                console.log(err);
                return res.status(500).json({
                    message : "database connection error"
                })
            }else if(!result){
                return res.json({
                    message : "Record Update successfully"
                })
            }else{
                return res.status(200).json({
                    data : result
                })
            }         
        })
    },
    deleteUser:(req,res) =>{
        let id = req.params.id
        deleteUser(id,(err,result)=>{
            if(err){
                return res.status(500).json({
                message : "database connection error"
                })       
            }else if(result === undefined){
                return res.json({
                message : "Record not found"
                })  
            }else{
                return res.json({
                message : "Data successfully deleted"
                })
            }
        })
    },
    login:(req,res)=>{
        const data = req.body
        getUserByCity(data,(err,results)=>{
            if(err){
                return err;
            }
            if(!results){
                return res.json({
                    mesasge:"invalid city name"
                })
            }
            const result = bcrypt.compare(data.Location,results.Location)
            if (result){
                results.Location = undefined
                const jsontoken = sign({result : results},process.env.TOKEN_ID,
                    {expiresIn : "1h"}
                )
                return res.json({
                    message:"login successfully",
                    token: jsontoken
                })
            }else{
                return res.json({
                    data:"Invalid Location name"
                })
            }
        })
    }
}