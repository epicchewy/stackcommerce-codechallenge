var Twitter = require('twitter-node-client').Twitter;
var config = require('../config');

//Callback functions
var error = function (err, response, body) {
    if(err){
    	console.log("Error: " + JSON.stringify(err));
    }
};

var twitter_config = {
    "consumerKey": config.consumer_key,
    "consumerSecret": config.consumer_secret,
    "accessToken": config.access_token,
    "accessTokenSecret": config.access_token_secret,
    "callBackUrl": config.callback_url
}

var twitter = new Twitter(twitter_config);

module.exports = {
	getTimeline : function (req, res){
		twitter.getUserTimeline({screen_name : req.body.data, count : 25}, error, function (data){

			console.log(JSON.stringify(data));
			res.json(data);
			// res.status(200).send(data);
		});
	}
};