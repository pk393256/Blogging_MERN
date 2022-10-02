const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    belongs:
        {type:mongoose.Schema.Types.ObjectId,ref:"User"},
        // required:true
    
    belongTo:[
        {type:mongoose.Schema.Types.ObjectId,ref:"User"}
    ]
})

const postModel= mongoose.model("Post",postSchema);
module.exports=postModel;
