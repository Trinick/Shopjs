var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.send('This software is currently in development.');
});
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.send(500, 'Something went wrong with your request. Please refresh the page or go back to your previous browsing page.');
});
app.listen(80);
console.log('Listening on port 80');
