
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , pyshortee = require('./routes/pyshortee')
  , about = require('./routes/about');

var app = express();

// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

//var about = require('./routes/about');
//app.get('about', about.about);

//var pyshortee = require('./routes/pyshortee');
//app.get('/pyshortee', pyshortee.pyshortee);


app.get('/', routes.index);
app.get('/users', user.list);
app.get('/pyshortee',pyshortee.pyshortee);
app.get('/about', about.about);

//development only
app.configure('development', function() {
	app.use(express.errorHandler());
});

//if ('development' == app.get('env')) {
//  
//}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log("Hello this is Express");
});
