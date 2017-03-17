/**
 * Created by fomer2 on 3/16/2017.
 */
var express =require('express');
var  app=express();
var port= process.env.PORT || 3000;
app.get('/',function(req,res){
    res.send('Welcome to Restful API using gulp');
});
app.listen(port,function(){
   console.log('Running on PORT: '+ port);
});





