var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var Students = new Schema({
  username: {type:String,
    required:true,
    index:{
      unique:true,
    }},
    email:{type:String,
      required:true,
      index:{
        unique:true,
      },
    match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
        password:{type:String,
      required:true, 
    },
      date:{
      type:Date,
      default:Date.now
    }
});

// Compile model from schema
var userModel= mongoose.model('Student', Students );
module.exports =userModel ;
  
