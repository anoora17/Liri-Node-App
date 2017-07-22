var request = require('request');
var fs = require("fs");
var colors = require('colors/safe')

function movie(movieName) {
  if (movieName === 'null'){
    movieName ="Mr.Nobody";
  }

request("http://www.omdbapi.com/?t="+movieName +"&y=&plot=short&apikey=40e9cece", function(error, response, body){

  // If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {
   var parsedBody = JSON.parse(body);

      console.log("**************************************************");
            console.log("The movie's Title is: " + colors.green.underline(parsedBody.Title));

            console.log("The movie's Year is: " + colors.green.underline(parsedBody.Year));

            console.log("The movie's Ratingis: " + colors.green.underline(parsedBody.imdbRating));

            console.log("The movie's Plot is: " + colors.green.underline(parsedBody.Plot));

            console.log("The movie's Actors is:  " + colors.green.underline(parsedBody.Actors));

            console.log("The movie's Language is: " +colors.green.underline(parsedBody.Language));


        if (parsedBody.Ratings === true){
             console.log("The movie's rottenTomato rating is:  "+ colors.green.underline(parsedBody.Ratings[1].Value[1]));

       } else {
              console.log(colors.red.underline("No rottenTomato rating"))
           }

        console.log("**************************************************");
  }

});

};

module.exports = movie;
