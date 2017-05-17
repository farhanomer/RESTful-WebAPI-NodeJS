/**
 * Created by fomer2 on 3/16/2017.
 */
/**
 *   Master Branch
 */

var express =require('express'),
    mongoose=require('mongoose');
/*var db=mongoose.connect('mongodb://127.0.0.1:27017/entityDB');*/

var Entity=require('./models/entityModel');

var app=express();
var port= process.env.PORT || 8000;
var orderRouter= express.Router();
orderRouter.route('/Orders')
    .get(function(req,res){
        var responseJSON={hello:"This is my api"};
        res.json(responseJSON);
    });


app.use('/api',orderRouter);


/*entityRouter.route('/Entities').get(function(req,res){
    Entity.find(function(err,entities){
        console.log(entities);
         if(err)
             res.status(500).send(err);
         else
             //entities
             res.json(entities);

     });


});*/


app.get('/',function(req,res){
    res.send('Welcome to Restful API using gulping');
});

app.listen(port,function(){
   console.log('Running on PORT: '+ port);
});






