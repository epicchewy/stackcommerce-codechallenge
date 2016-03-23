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

// var twitter_config = {
//     "consumerKey": "HoaLEJX66CUZJb3skPd39wgL2",
//     "consumerSecret": "38kaEN96UmaRG30mIn3EvLgx0NaK2viyv2eJ4l7MpAj8oqJgjI",
//     "accessToken": "	3262596740-JdwC4xCV7oXBvkPlxC4SSubpnSBI472Zfu4LZwb",
//     "accessTokenSecret": "nZplw9SlfH3LZEYKcoBCUq6XEJexfRyh0HFUra3mSHhz2",
//     "callBackUrl": "XXX"
// };

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