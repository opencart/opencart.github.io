
$(document).ready(function(){

		// Check the language and make changes when select language
		var pathname = window.location.pathname;

		// Checking the url has language tag or not
	if (window.location.href.indexOf('en-gb') < 1 && window.location.href.indexOf('ru-ru') < 1 && window.location.href.indexOf('zh-hk') < 1) {
			language = 'ru-ru';
			if(pathname == '/' || pathname == '/introduction/'){
				window.location.replace(language + '/introduction/');
			} else {
				window.location.replace(language + pathname);
			}
		}

		$('#menu > div').hide();

		if(pathname != '' || pathname != null){
			var href = pathname.slice(6);
		} else {
			var href = '';
		}

	  $('#button-en-gb').on('click', function(){
			if(href != ''){
				href = 'en-gb' + href;
			} else {
				href = 'en-gb/introduction/';
			}
	    window.location.href = href;
	  });

	$('#button-ru-ru').on('click', function () {
		if (href != '') {
			href = 'ru-ru' + href;
		} else {
			href = 'ru-ru/introduction/';
		}
		window.location.href = href;
	});

	  $('#button-zh-hk').on('click', function(){
			if(href != ''){
				href = 'zh-hk' + href;
			} else {
				href = 'zh-hk/introduction/';
			}
	    window.location.href = href;
	  });


		// Get exists language and auto fill the language path before each link
		var language = pathname.slice(1,6);

		if(language == '' || language == null){
			language = 'en-gb';
		}

    $('#menu a').each(function() {
			var current_url = pathname.slice(7);
      var url = $(this).attr('href');

			// Add .active on menu if it is current page
			if(url == current_url){
				$('#menu a[href="' + current_url +'"]').parents('li').addClass('active').addClass('open');
			}

      $(this).attr('href', '/' + language + '/' + url);
    });


		// Menu Language
		switch(language){
			case 'en-gb': $('#menu #en-gb').show(); break;
			case 'ru-ru': $('#menu #ru-ru').show(); break;
			case 'zh-hk': $('#menu #zh-hk').show(); break;
		}


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
