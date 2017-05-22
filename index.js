var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed 

module.exports = function(url,callback){
	var req = request(url);
	var feedparser = new FeedParser();
	 
	req.on('error', function (err) {
		callback(err);
	});
	 
	req.on('response', function (res) {
		if(res.statusCode !== 200) {
			callback('Bad status code');
			return ;
		}
		this.pipe(feedparser);
	});
	 
	feedparser.on('error', function (error) {
		callback(err);
	});
	
	var items = []; 
	feedparser.on('readable', function () {
		var meta = this.meta;
		while (item = this.read()) {
			items.push(item);
		}

	});
	
	feedparser.on('end', function(){
		callback(null,items);
	});
}
