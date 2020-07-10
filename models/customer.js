const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String ,
        required: true
    },
    lastName:{
        type: String ,
        required: true
    },
    phoneNumber:{
        type: Number ,
        required: true
    },
    email:{
       type:String,
       
    }
}, {timestamps:true})



const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;