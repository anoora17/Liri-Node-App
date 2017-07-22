var inquirer = require('inquirer')
var my_tweets =require('./cli/tweets')
var movie = require('./cli/movie')
var spotify_this_song = require('./cli/spotify')
var fs = require('fs');
var keys = require('./cli/keys.js');

var cli= process.argv[2];
// var input = process.argv[3];


function do_what_it_says(){
if (cli === 'my_tweets' || cli === 'my tweets'){
  var screenName = process.argv[3];
  my_tweets(screenName);
}
 if(cli === 'spotify-this-song' ||cli === 'spotify this song'){
   var input = process.argv[3];
   console.log(input);
  spotify_this_song(input);
}
if (cli ==='movie-this' || cli === 'movie this'){
  var input = process.argv[3];
  console.log(input);
  movie(input);
}
else {
  console.log("Please type one of those choices to start,'my-tweets', 'spotify-this-song', 'movie-this'")
};
}
do_what_it_says()
console.log(cli);
