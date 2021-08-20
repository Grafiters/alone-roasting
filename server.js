var express = require('express');
var app = express();
const MainRoute = require('./route/index');
const bodyParser = require('body-parser');


app.get('/', function (req, res) {
  res.send('Hello your fucking sh*t !');
});

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());
    
app.use('/api', MainRoute);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});