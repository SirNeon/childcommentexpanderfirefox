var buttons = require("sdk/ui/button/action");
var pageMod = require("sdk/page-mod");

var button = buttons.ActionButton({
	id: "child-comment-expander",
	label: "Child Comment Expander",
	icon: {
		"32": "./icon-32.png"
	}
});

pageMod.PageMod({
	include: [
		"http://www.reddit.com/r/SubredditAnalysis/comments/*",
		"https://www.reddit.com/r/SubredditAnalysis/comments/*",
		"http://np.reddit.com/r/SubredditAnalysis/comments/*",
		"https://np.reddit.com/r/SubredditAnalysis/comments/*",
		"http://www.reddit.com/r/SubredditDramaDrama/comments/*",
		"https://www.reddit.com/r/SubredditDramaDrama/comments/*",
		"http://np.reddit.com/r/SubredditDramaDrama/comments/*",
		"https://np.reddit.com/r/SubredditDramaDrama/comments/*",
		"http://www.reddit.com/r/ThePopcornStand/comments/*",
		"https://www.reddit.com/r/ThePopcornStand/comments/*",
		"http://np.reddit.com/r/ThePopcornStand/comments/*",
		"https://np.reddit.com/r/ThePopcornStand/comments/*"
	],
	contentScriptFile: "./childcommentexpander.js"
});
