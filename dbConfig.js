/* mongoDB connection*/
var mongodb = require('mongodb');

module.exports = function() {

    this.getConnection = function(callback) {

        var MongoClient = mongodb.MongoClient;
        var url = 'mongodb://127.0.0.1:27017/entityDB';

        console.log(url);

        MongoClient.connect(url, function(err, db) {

            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);

            } else {
                console.log('Connection established to', url);
                return callback;
            } //else

        }); //MongoClient.connect

    }; //Connection

}; //constructor