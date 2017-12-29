var express = require('express')
var app = express()

var bodyParser = require('body-parser')


app.use(bodyParser.json())
 
app.get('/hola', function (req, res) {
  res.send('Hello World juancitovbbbbbbbbbbbbbbbbbbbbb szd/xx')
})

app.use(function(req,res){
    res.send(404)
})
 
app.listen(3001)