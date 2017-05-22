# simple-feedreader
Gets rss/atom feeds easily. It's basically a wrapper for the [feed-parser](https://www.npmjs.com/package/feedparser) module.
### Example:
	var feed = require('simple-feedreader');
	feed('http://example.com/rss',function(err,res){
		console.log(err,res)
	});
