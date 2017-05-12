var express = require('express')
var ip = require('ip')
var app = module.exports = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/views'))

app.get('/', function(req,res) {
  res.sendFile('index.html')
})

app.get('/api/whoami', function(req,res) {
  res.json({
    ipaddress: ip.address(),
    language: req.acceptsLanguages()[0],
    software: req.get('User-Agent').split(')')[0].split('(')[1]
  })
})

app.listen(port, function() {
  console.log("working")
})
