/*Небольшой пример использование jQuery */

$(window).scroll(function(){
	if ($(window).scrollTop()) {
		$('#header').addClass('headerFixed');
		$('#headerLogo').css('margin-top','0');
	}
	else {
		$('#header').removeClass('headerFixed')
		$('#headerLogo').css('margin-top','10px');
	}
});

 