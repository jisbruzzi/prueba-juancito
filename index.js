var express = require('express')
var app = express()
const MongoClient = require('mongodb').MongoClient;

var bodyParser = require('body-parser')
const url = 'mongodb://pp:pp@ds133597.mlab.com:33597/josecito';

let db=null;

MongoClient.connect(url, function(err, client) {
    console.log("Connected correctly to server");
  
    db = client.db("josecito");
});
  



app.use(bodyParser.json())

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.get('/:nombre', function (req, res) {
    console.log(req.params);
    db.collection("mediciones").findOne({nombre:req.params.nombre});
})

app.post('/:nombre', function (req, res) {
    let o=req.body;
    o.nombre=req.params.nombre;
    console.log(req.params);
    db.collection("mediciones").insertOne(o);
})

app.use(function(req,res){
    res.send(404)
})
 
app.listen(process.env.PORT || 3001)