
$(document).ready(function(){
		var pathname = window.location.pathname.split('/');
		var href = '';
	  $('#button-en-gb').on('click', function(){

			if(pathname.slice(2,-1) != ''){
				href = 'en-gb' + '/' + pathname.slice(2,-1) + '/';
			} else {
				href = 'en-gb' + '/';
			}
	    window.location.href = href;
	  });

	  $('#button-zh-hk').on('click', function(){
			if(pathname.slice(2,-1) != ''){
				href = 'zh-hk' + '/' + pathname.slice(2,-1) + '/';
			} else {
				href = 'zh-hk' + '/';
			}
	    window.location.href = href;
	  });

		//var language = pathname.slice(1,-2);

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
