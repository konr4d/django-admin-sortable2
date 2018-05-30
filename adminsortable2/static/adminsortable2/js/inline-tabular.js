django.jQuery(function($) {
	$('script.inline-tabular-config').each(function (i, config_element) {
		try {
			const config = JSON.parse(config_element.textContent);
			const selector = `#${config.prefix}-group .tabular.inline-related tbody tr`;
			$(selector).tabularFormset(selector, config);
		}
		catch (parse_error) {
			console.error('Configuration for a django-adminsortable2 inline-tabular form is invalid.');
			console.error(parse_error);
		}
	});
});
