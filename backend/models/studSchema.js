const mongoose= require("mongoose");
const studSchema = new mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    isApproved: { 
        type: Boolean,
        default: false
    },
});
const students=new mongoose.model("students",studSchema);
module.exports=students;