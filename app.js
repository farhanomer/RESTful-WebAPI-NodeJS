/**
 * Created by fomer2 on 3/16/2017.
 */


var express =require('express'),
    mongoose=require('mongoose');
var db=mongoose.connect('mongodb://127.0.0.1:27017/entityDB');

var Entity=require('./models/entityModel');

var app=express();
var port= process.env.PORT || 3000;


var entityRouter= express.Router();
entityRouter.route('/Entities').get(function(req,res){
    Entity.find(function(err,entities){
        console.log(entities);
         if(err)
             res.status(500).send(err);
         else
             //entities
             res.json(entities);

     });


});

app.use('/api',entityRouter);
app.get('/',function(req,res){
    res.send('Welcome to Restful API using gulp');
});

app.listen(port,function(){
   console.log('Running on PORT: '+ port);
});






