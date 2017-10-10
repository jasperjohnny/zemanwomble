$(document).ready(function() {
	// if Modernizr detects class "touch"
	if($('html').hasClass('touch')) {
		// for each element with class "make-tel-link"
		$(".touchTel").each(function () {
		var jPhoneNumber = $(this).text();
		// wrap phone with href="tel:" and then insert phone number
			$(this).wrapInner('<a class="jPhoneLink" href=""></a>');
			$('.jPhoneLink').attr('href', 'tel:'+jPhoneNumber);
		});
	}              
});

$('.gaEventTracker').each( function() {
	$(this).on('click', function(e) {
		var category = $(this).data('cat'),
		    action = $(this).data('act'),
		    label = $(this).data('label'),
		    value = $(this).data('ga-value'); 
		    
		ga('send', 'event', category, action, label, value);
	});
});