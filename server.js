// Create an express object
var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan'),
	bodyparser = require('body-parser');

// Set the node environmental variable to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// This code is to use the stylus
{
	// Create a middleware function

	var compile = function(str, path)
	{
		return stylus(str).set('filename', path);
	}
}
// Create the express object
var app = express();

// Set the path where the server side views are rendered
app.set('views' , __dirname + '/server/view');

// Set the view engine
app.set('view engine', 'jade');
app.use(stylus.middleware(
{
	src : __dirname + '/public',
	compile : compile

}));

// If any unknown route comes, the route will be searched in the public folder
// and if a file matches the route it will be returned to the user.
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

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

