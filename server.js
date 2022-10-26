var express = require('express');
var app = express();
const MainRoute = require('./route/index');
const bodyParser = require('body-parser');
const path = require('path');


app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname,'./')
  })
});

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());
    
app.use('/api', MainRoute);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});