var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello Heroku. I take the control now and forever! You are mine now');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});