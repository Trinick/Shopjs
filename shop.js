var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('This software is currently in development.');
});
app.listen(80);
console.log('Listening on port 80');
