(function(undefined){
	//Get and activate the Chrome Frame prompt
	$.getScript('http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js', function(){
		CFInstall.check({
			mode: "overlay"
		});
	});
})();