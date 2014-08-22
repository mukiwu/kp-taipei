
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


	KP.api('/category/')
		.done(loadCategory)
		.done(function (result) {
			KP.data.category = result.data;
		});

	KP.api('/albums/')
		.done(loadAlbums)
		.done(function (result) {
			KP.data.albums = result.data;
		});

	KP.api('/videos/')
		.done(loadVideos)
		.done(function (result) {
			KP.data.videos = result.data;
		});

	function loadCategory(categories) {
		categories.data.map(function (category) {
			KP.api('/category/' + category.id).done(function (result) {
				category.data = result.data;
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
			});
		});
	}
});
