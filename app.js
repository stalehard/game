var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
//var config = require('config');
//var log = require('libs/log')(module);

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/', function(req, res, next) {
    res.render("index", {});
});

app.use(express.static(path.join(__dirname, 'public')));



/*
 var routes = require('./routes');
 var user = require('./routes/user');
 // all environments
 app.get('/', routes.index);
 app.get('/users', user.list);
 */

http.createServer(app).listen(3000, function(){

});