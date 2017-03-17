/**
 * Created by fomer2 on 3/16/2017.
 */


var express =require('express'),
    mongoose=require('mongoose');
var db=mongoose.connect('mongodb://localhost/entityAPI');
var Entity=require('./models/entityModel');

var  app=express();
var port= process.env.PORT || 3000;

/* mongoDB connection*/


var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://127.0.0.1:27017/entityDB", function (err, db) {
        //console.log(db.getName());
    if(err) throw err;
        //alert(db);
    //Write databse Insert/Update/Query code here..

    console.log('Total Rows: ' + db.name());

    db.collection('Persons', function (err, collection) {

        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });




        (function (err, count) {
            if (err) throw err;

            console.log('Total Rows: ' + count);
        });
    });
});

/*mongodb connectione ends here*/



var entityRouter= express.Router();
entityRouter.route('/Entities').get(function(req,res){
     Entity.find(function(err,entities){
         if(err)
             console.log(err);
         else
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






