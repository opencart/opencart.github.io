
$(document).ready(function(){

	  $('#button-en-gb').on('click', function(){

	  });

	  $('#button-zh-hk').on('click', function(){

	  });


		$('#menu .parent').on('click', function(e) {
			e.preventDefault();

			if (!$(this).parent().hasClass('open')) {
				$(this).parent().addClass('open');
			} else {
				$(this).parent().removeClass('open');
			}

			$(this).parents('li').siblings().removeClass('open');
		});

		if (String(document.location).substr($('base').attr('href').length)) {
			alert($('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"]'));
			$('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"]').parents('li').addClass('open');
		}


});
