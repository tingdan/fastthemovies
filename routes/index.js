var moviesJSON = require('../movies.json');
// Home
exports.home = function(req, res) {
  var movies = moviesJSON.movies;

  res.render('home', {
              title: 'The Fast and The Furious Movies',
              movies: movies
              } );
};

//movie_single
exports.movie_single  = function(req, res) {

  var series_number = req.params.series_number;
  var movies = moviesJSON.movies;
  if (series_number >= 1 && series_number <= 8) {
    var movie = movies[series_number-1];
    var title = movie.title;
    var main_characters = movie.main_characters;

    res.render('movie_single',{
      movies: movies,
      title: title,
      movie: movie,
      main_characters: main_characters
    });
  } else {
    res.send("This is not the page you looking for");
  }



};

// notFound
exports.notFound = function(req, res) {
  res.send("this is nor page you are looking for");
};
