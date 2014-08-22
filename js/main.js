
var KP = (function initKP(window, $) {

	var API_KEY = '';

	var API_URL = 'http://api.kptaipei.tw/v1/';

	var api = function api(path, options) {

		options = options || {};
		options.accessToken = API_KEY;

		return $.get(API_URL + path, options);
	};

	return {
		api: api,
		data: {}
	};

})(window, jQuery);


/*
 * Main
 */
jQuery(document).ready(function($) {

	// $('ul.kp-news.line-content').()

	KP.api('/category/')
		.done(loadCategory)
		.done(appendTo('category'));

	KP.api('/albums/')
		.done(loadAlbums)
		.done(appendTo('albums'));

	KP.api('/videos/')
		.done(loadVideos)
		.done(appendTo('videos'));


	function appendTo(resource) {
		return function (result) {
			KP.data[resource] = result.data;
			return result;
		}
	}

	function loadCategory(categories) {
		categories.data.map(function (category) {
			KP.api('/category/' + category.id).done(function (result) {
				category.data = result.data;
				var docs = result.data;

				docs.forEach(function (doc) {
					try{
						doc.content = decodeURI(doc.content);
					}catch(e){
						console.log(e);
					}

					var li = $('<li><h2 class="title">'+doc.title+'</h2><p class="entry">'+doc.content+'</p></li>');
					$('ul.kp-news.line-content').append(li);
				});


				console.log('docs', docs);
			});
		});
	}


	function loadAlbums(albums) {
		albums.data.map(function (album) {
			KP.api('/albums/' + album.id).done(function (result) {
				album.data = result.data;
			});
		});
	}


	function loadVideos(videos) {
		videos.data.map(function (video) {
			KP.api('/videos/' + video.id).done(function (result) {
				video.data = result.data;

				var docs = result.data;

				docs.forEach(function (doc) {
					try{
						doc.description = decodeURI(doc.description);
					}catch(e){
						console.log(e);
					}

					var li;

					li = $('<li><h2 class="title">'+doc.title+'</h2></li>');
					li.append('<div class="video-wrap clear"><a href="'+doc.link+'" target="_blank"><img src="'+doc.thumbnails.high.url+'" border="0" /></a><div class="des">'+doc.description+'</div></div>');

					$('ul.kp-video.line-content').append(li);
				});
			});
		});
	}

	// tab
	$(".tab span:first").addClass("current");
	$(".tab ul:not(:first)").hide();

	$(".tab span").on("mouseover", function(){
		$(".tab span").removeClass("current");
		$(this).addClass("current");

		$(".tab ul").hide();
		$("." + $(this).attr("id")).fadeIn("slow");

	})
	// msearch
	$('input.search').msearch('.line-content li', 'data-info');
});
