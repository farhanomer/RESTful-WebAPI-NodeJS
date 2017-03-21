/**
 * Created by Farhan Omer on 3/17/2017.
 */
var mongoose=require('mongoose'),
    Schema=mongoose.Schema;
var entityModel= new Schema({
    UserName:{type: String},
    Phone:{type: String}
 //   read:{type: Boolean,default:false}
});
module.exports=mongoose.model('Entity',entityModel);