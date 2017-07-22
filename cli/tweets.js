
var Twitter = require('twitter');
var keys = require('./keys.js');
var fs = require("fs");
var colors = require('colors/safe')

function my_tweets() {
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

client.get('statuses/user_timeline', {screen_name: 'anoora17'}, function(error, tweets, response){
    if (!error) {
        for (var i = 0; i < JSON.stringify(tweets.length); i++) {
            console.log("**************************************************");
            console.log('tweets: '+ colors.yellow.underline(JSON.stringify(tweets[i].text, null, 2)));
          console.log('time: '+ colors.yellow.underline(JSON.stringify(tweets[i].created_at, null, 2),false,true));
            console.log("**************************************************");
        }
    } else {
        console.error('An error occurred!'); //error handling
        console.log('error statusCode = '+response.statusCode);
        fs.appendFile("./logs.txt","\n tweets error");
    }
});
}
module.exports = my_tweets;
