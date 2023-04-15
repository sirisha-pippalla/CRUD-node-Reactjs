const mongoose = require ('mongoose');

const userSchema = mongoose.Schema(
    {
        "name":{
            type:String,
            require:[true, "Name Is Required"],
            trim:true,
            maxlength:[25, "Name must be 25 charcter long"]
        },
        "email":{
            type:String,
            require:[true, "Email is Required"],
            unique:true,
        }
    }
)

module.exports = mongoose.model("User", userSchema);