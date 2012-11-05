(function(undefined){
	//Get and activate the Chrome Frame prompt
	$.getScript('http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js', function(){
		CFInstall.check({
			mode: "overlay"
		});
	});

	//Chart
	var deathsArray = [
		[2000, 41945],
		[2001, 42196],
		[2002, 43005],
		[2003, 42643],
		[2004, 42836],
		[2005, 43443],
		[2006, 42642],
		[2007, 41059],
		[2008, 37261],
		[2009, 33808],
		[2010, 32885]
	];

	var deathsContainer = $('.graph.deaths');
	var deaths = $.plot(deathsContainer, [deathsArray]);
})();