const videoElem = document.getElementById('video'); //検証ツールで取ってきてくれい

videoElem.addEventListener('loadedmetadata', function() {
	videoElem.playbackRate = 2;
});
