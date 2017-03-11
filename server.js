var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');
var port = 3737;

var corsOptions = {
  origin: 'http://localhost:3737'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(session({secret: config.sessionSecret }));

app.post("/api/login", userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles);

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log("listening on port ", port);

});
