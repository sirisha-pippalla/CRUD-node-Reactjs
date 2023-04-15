//Logic
const User = require("../models/userModel");
exports.home = (req, res) => {
    res.send("<h1>Hello siri</h1>")
};

exports.createUser = async(req, res)=>{
    try{
        const {name, email} = req.body;
        //To check all the details
        if(!name || !email){
            throw new Error("Name and Email are Required")
        }
        const userExists = await User.findOne({email});
        if(userExists){
            throw new Error("Email Alreadt Exists");
        }
        const user = await User.create({name, email});
        res.status(200).json({
            success:true,
            message:"user created successfully",
            user
        });

    }catch(error){
        console.log(error);
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

exports.getUsers = async(req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:err.message
        })
    }
}

exports.editUser = async(req, res)=>{
    try {
        // const {id} = req.params.id
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success:true,
            message:"User updated successfully",
           
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}


exports.deleteUser = async(req, res)=>{
    try {
        // const {id} = req.params.id;
        const user = await User.findByIdAndDelete(req.params.id, req.body);
        if(!user){
            res.status(404).json({
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}




