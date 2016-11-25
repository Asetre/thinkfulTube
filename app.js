var url = 'https://www.googleapis.com/youtube/v3/search';
var key = 'AIzaSyDtLg1q2qg16RdKWy_gbaPlFpqAfww-Lv8'



// var query = {
// 	part: 'snippet',
// 	key: key,
// 	q: $('.submit').val()
// }
$(document).ready(function() {

	$('form').submit(function(e) {
		e.preventDefault();
		var input = ($('.input').val())
		var query = {
			part: 'snippet',
			key: key,
			q: input
			}

		test(query);


	});

})


function test(query) {
	$('img').remove();
	$.getJSON(url, query, function(data) {
		var dataCount = data.items.length;
	for(var i = 0; i< dataCount; i++) {
		var dataItem = data.items[i];
		console.log(dataItem)
		var img = dataItem.snippet.thumbnails.default.url;
		var dataHTML = '<a href="'+ "https://www.youtube.com/watch?v="+ dataItem.id.channelId +'"><img src="'+ img + '" width=300px height="300px"> </a>'

			$('.thumbnail-container').append(dataHTML)

	}


	});

}

