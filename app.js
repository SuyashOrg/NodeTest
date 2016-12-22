var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World new projectsuyash");
});

app.listen(4000)