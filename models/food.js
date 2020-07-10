const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    name:{
        type:String ,
        required: true ,
        unique:true
    },
    categorie:{
        type:String ,
        required: true
    },
    price:{
        type: Number,
        required:true
    }
})

const Food     = mongoose.model('food' , foodSchema);

module.exports = Food;