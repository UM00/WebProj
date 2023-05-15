const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const UserSchema =new Schema({
    Name:{
        type: String,
        required: true,

    },
    Age:{
        type: Number,
        required: true,

    },
    Email:{
        type: String,
        required: true,

    },
    Address:{
        type: String,
        required: true,

    },
    PhoneNo:{
        type: Number,
        required: true,

    }
    

});

module.exports = mongoose.model('User',UserSchema);