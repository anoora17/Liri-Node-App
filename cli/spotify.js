var Spotify = require('node-spotify-api');
var fs = require("fs");
var colors = require('colors/safe')

 var input = process.argv[3];
function spotify_this_song(input){
  var spotify = new Spotify({
    id: 'cfc76160fed345dab1b7403389d8d288',
    secret: 'd5af345f608c4aefbc0200ce39137d14'
  });

spotify.search({ type: 'track', query: input}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
    fs.appendFile("logs.txt", err);
  }

var firstPage = data.tracks.items;
  firstPage.forEach(function(tracks, index) {
      console.log("**************************************************");
    console.log(index + ': Albume Name:  ' +   colors.red.underline(tracks.album.name )+ ' " The popularity Number is" (' + tracks.popularity + ')'+ "\n The Artist Name: is"+colors.red.underline(tracks.artists[0].name)+ '\n  You can here the song by copy and pest this URL'+ colors.blue.underline(tracks.preview_url));
      console.log("**************************************************");
  });
});


}
if (input){
  spotify_this_song(input)
}else {
  fs.readFile('./random.txt', 'UTF8', function(err,data){

     var message = data;
    spotify_this_song(message)
       });
   };

module.exports =spotify_this_song;
