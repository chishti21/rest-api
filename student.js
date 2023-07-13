const mongoose = require('mongoose');
const validator=require('validator');
const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:
    {
        type:String,
    }
})
const Student = mongoose.model('Student', StudentSchema);
module.exports=Student;