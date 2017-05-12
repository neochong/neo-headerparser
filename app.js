var express = require('express')
var app = module.exports = express()
var port = process.env.port || 8080;

app.get('/api/whoami', function(req,res) {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    software: req.get('User-Agent').split(')')[0].split('(')[1]
  })
})

app.listen(port, function() {
  console.log("working")
})
