const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const UserSchema =new Schema({
    name:{
        type: String,
        required: true,

    },
    age:{
        type: Number,
        required: true,

    },
    email:{
        type: String,
        required: true,

    },
    address:{
        type: String,
        required: true,

    },
    phoneNo:{
        type: Number,
        required: true,

    }
    

});

module.exports = mongoose.model('User',UserSchema);