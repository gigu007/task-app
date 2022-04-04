const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
     type:String,
     required:true,
     maxlength:[20,'character must not be more than 20'],
     minlength:[5,'characters must not be less than 5'],
     default:false,
     trim:true
    },
    completed:{
        type:Boolean,
        default:false,
    },
})
module.exports = mongoose.model('Task',TaskSchema)
