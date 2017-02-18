var express = require('express');
var router = express.Router();
var tmdbclient = require('themoviedbclient');
var tmdb = new tmdbclient('de4833475e61d855b5e77ecf00273f96');



/* retrieve latest movies from DB */
router.get("/Movies", function(req, res, err) {

    tmdb.call("/movie/now_playing", {})
        .then(function (data) {


            var moviedata;
            for(var i = 0; i < data.results.length; i++) {

                moviedata += "  <div class='row'> <div class='col-md-6'> <img alt='Movie Image' src='https://image.tmdb.org/t/p/w300"+ data.results[i].backdrop_path + "' class='img-rounded'> <h2>" + data.results[i].original_title + "</h2> <p>" + data.results[i].overview + "</p> <p> The score for this movie was: " + data.results[i].vote_average + " </p> </div> <div class='col-md-6'> </div> </div>"


            }








            res.render('movies', {moviedata : moviedata.substring(11)});
        });

})








/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
