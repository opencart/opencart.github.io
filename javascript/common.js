
$(document).ready(function(){

		// Check the language and make changes when select language
		var pathname = window.location.pathname;
		var href = pathname.slice(6);

	  $('#button-en-gb').on('click', function(){
			href = 'en-gb' + href;
	    window.location.href = href;
	  });

	  $('#button-zh-hk').on('click', function(){
			href = 'zh-hk' + href;
	    window.location.href = href;
	  });

		// Get exists language and auto fill the language path before each link
		var language = pathname.slice(1,6);

		if(language == '' || language == null){
			language = 'en-gb';
		}

    $('#menu a').each(function() {
      var url = $(this).attr('href');
      $(this).attr('href', '/' + language + '/' + url);
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
			$('#menu a[href="' + String(document.location).substr($('base').attr('href').length) + '"]').parents('li').addClass('open');
		}


});
