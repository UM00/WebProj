const mongoose = require("mongoose")
const AdminSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required: true
        
    }

},
{ timestamps: true }
);

const Admin= mongoose.model('Admin', AdminSchema);
module.exports = Admin;
