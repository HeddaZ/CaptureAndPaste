(function($) { // Wrap for jQuery habits
	$(function() {
		var pasteReceiver = $('<textarea />')
			.attr('title', '(Paste from Clipboard with IE11, Chrome or Firefox)')
			.val('(Paste from Clipboard with IE11, Chrome or Firefox)')
			.focus(function() {
				$(this).val($(this).attr('title')).select();
			});
		var pasteCancel = $('<button type="button" />').html('x');
		var pastePreview = $('<img />');
		var pastePanel = $('<div />').attr('id', 'pastePanel')
			.append(pasteReceiver)
			.append(pasteCancel).append('<br />')
			.append(pastePreview);
		var pasteData = $(':file:visible[id^=ufile]').first()
			.before(pastePanel);

		pasteCancel.click(function() {
			var pasteCancel = $(this).hide();
			pasteCancel.siblings('img')
				.slideUp(function() {
					pasteData.removeClass('pasteData').attr('type', 'file');
				});
		});
		pasteReceiver.pastableTextarea() // paste.js
			.on('pasteImage', function(event, data) {
				pasteData.attr('type', 'text').addClass('pasteData')
					.val(data.dataURL);

				var pasteReceiver = $(this).focus();
				pasteReceiver.siblings('button').show();
				pasteReceiver.siblings('img').hide()
					.attr('src', data.dataURL).attr('width', data.width).attr('height',	data.height)
					.slideDown();
			})
			.slideDown();
	});
})(jQuery);