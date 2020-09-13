;(function($){
	$.mask = function(){
		$('body').append('<div class="loadmask"></div>');
	};
	showLoader = $.mask;

	$.unmask = function(){
		$('body').children('div.loadmask').remove();
	};
	hideLoader = $.unmask;
})(jQuery);