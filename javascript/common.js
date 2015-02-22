$(document).ready(function() {
	$('#menu .parent').on('click', function(e) {
		e.preventDefault();
		
		$(this).parents('li').siblings().removeClass('open');
		
		//$('#menu .parent').not($(this).parents('li').siblings()).removeClass('open');
		
		$(this).parent().addClass('open');
	});
	
	$('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"]').parents('li').addClass('open');
});