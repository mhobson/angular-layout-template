$(document).ready(function(){
	$('.js-toggle').bind('click', function() {
		$('.js-sidebar').toggleClass('is-toggled');
		$('.js-content').toggleClass('is-toggled');
	});
	
	$('#btnFilter').bind('click', function() {
		$('.ui-column-filter').toggleClass('is-filter');
	});
});