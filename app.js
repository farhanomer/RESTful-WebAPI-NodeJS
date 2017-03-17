/**
 * Created by fomer2 on 3/16/2017.
 */
var express =require('express'),
    mongoose=require('mongoose');
var db=mongoose.connect('mongodb://localhost/entityAPI');
var Entity=require('./models/entityModel');

var  app=express();
var port= process.env.PORT || 3000;

var entityRouter= express.Router();
entity.route('/Entity').get(function(req,res){
     var responseJSON={hello:"This is my api"};
     res.json(responseJSON);

});

app.use('/api',router);
app.get('/',function(req,res){
    res.send('Welcome to Restful API using gulp');
});

app.listen(port,function(){
   console.log('Running on PORT: '+ port);
});






