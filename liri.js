var command = process.argv[2];
var userInput = process.argv[3];

function runTwitter(){
   var Twitter = require('twitter');
 
    var client = new Twitter({
    consumer_key: 'efN9ReNok39L5FCBTdEuEzvbW',
    consumer_secret: '9e3mTIMlJ6t1kQS6M6PaNfSAiOztO9Yy14ideXow72nn5YrAZq',
    access_token_key: '403670625-SGLtlzH6IRYgMERLuauOeoyfES9whlWPEGaMnX4U',
    access_token_secret: 'xdS8cvXxx4G3AYFFLjOlKHBBX0Ktw3vR40aqljEGA6b52'
    });
    
    var params = {screen_name: 'triscuit15'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for(i = 0; i < 20; i++){
               console.log(tweets[i].text);
               console.log("------------------------------------------"); 
            };
        };
    }); 
}
function runSpotify(){
   var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify({
        id: "38f928ced9774c7c8e064641a83126af",
        secret: "64eb533e1a76462a9dc30a7ebfa305b6"
    });
    
    spotify.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        for(i = 0; i < 3; i++){
            console.log(data.tracks.items[i].artists[0].name);
            console.log(data.tracks.items[i].name); 
            console.log(data.tracks.items[i].album.name);
            console.log(data.tracks.items[i].external_urls.spotify);
            console.log("------------------------------------------"); 
   
        };
    });  
}

function runOmdb(){

    var request = require("request");

    request("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

    if (!error && response.statusCode === 200) {

        console.log("------------------------------------------");
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country produced: " + JSON.parse(body).Country);
        console.log("Languages made in: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("------------------------------------------");
        
    }
    });
}

 if(command === "my-tweets") {
        runTwitter();
    } else if(command === "spotify-this-song") {
        runSpotify();
    } else if(command === "movie-this") {
        runOmdb();
    } else{
        console.log("sorry thats not a function!");
};

