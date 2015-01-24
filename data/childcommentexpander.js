var contest_mode = document.getElementsByClassName("contest-mode infobar mellow");

if(contest_mode[0] != null) {
	var i = 0;
	var child_comments = document.getElementsByClassName('showreplies');

	for(i = 0; i < child_comments.length; i++) {
    	child_comments[i].click();
	}
}
