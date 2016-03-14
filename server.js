// Create an express object
var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan');

// Set the node environmental variable to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Create the express object
var app = express();

// Set the path where the server side views are rendered
app.set('views' , __dirname + '/server/view');

// Set the view engine
app.set('view engine', 'jade');

// This code can be deleted 
	{
	// Middleware function test
	// Create a function
	var logger = (function(req, res, next)
	{
		console.log("Reached here");
		next();
	},
	// Middleware function
	function(req, res, next)
	{
		console.log("time : " + Date.now());
		next();
	})

	// Before calling the actual route, this is how you call the midleware function
	app.use(logger);

	app.get('/middleware/example/', function(req, res)
	{
		console.log('Request type ' 
			+ req.method);

		res.send('txt');
	});
	}

// This is the default route, if a route is not defined, we will reach this place
// and the server redirects the caller to a different page, ideally the index page.
app.get('*', function (req, res)
{
res.render('index');
});

var port = 3030;
app.listen(port);

console.log('listening on ' + port);

