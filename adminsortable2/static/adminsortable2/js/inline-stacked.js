django.jQuery(function($) {
	$('script.inline-stacked-config').each(function (i, config_element) {
		try {
			const config = JSON.parse(config_element.textContent);
			const selector = `#${config.prefix}-group .inline-related`;
			$(selector).stackedFormset(selector, config);
		}
		catch (parse_error) {
			console.error('Configuration for a django-adminsortable2 inline-stacked form is invalid.');
			console.error(parse_error);
		}
	});
});
