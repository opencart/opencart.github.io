
$(document).ready(function(){

		var pathname = window.location.pathname;
		var href = pathname.slice(6);

	  $('#button-en-gb').on('click', function(){

			if(href != ''){
				href = 'en-gb' + href + '/';
			} else {
				href = 'en-gb' + '/';
			}
	    window.location.href = href;
	  });

	  $('#button-zh-hk').on('click', function(){
			if(href != ''){
				href = 'zh-hk' + href + '/';
			} else {
				href = 'zh-hk' + '/';
			}
	    window.location.href = href;
	  });

		var language = pathname.slice(1,6);
		alert(language);
		//var language = 'en-gb';

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
