var express = require('express');

var app = express();


app.set('view engine', 'ejs');


var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//---------- Routes -----------------

// Home
app.get('/', routes.home);

//movie_single
app.get('/The_Fast_and_the_Furious/:series_number?', routes.movie_single);

// notFound
app.get('*', routes.notFound);

app.listen(3000, function() {
  console.log('the application is running on localhost:3000');
})
