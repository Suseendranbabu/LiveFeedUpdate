// Create an express object
var express = require('express');

// Set the node environmental variable to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Create the express object
var app = express();

// Set the path where the server side views are rendered
app.set('views' , _dirName + '/server/views');

// Set the view engine
app.set('view engine', 'jade');

// This is the default route, if a route is not defined, we will reach this place
// and the server redirects the caller to a different page, ideally the index page.
app.get('*', function (req, res)
{
res.render('index');
})