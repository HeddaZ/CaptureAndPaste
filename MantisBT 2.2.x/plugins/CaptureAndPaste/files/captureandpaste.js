(function ($) { // Wrap for jQuery habits
    $(function () {
        var pasteReceiver = $('<textarea />')
            .css('font-size', '11px')
            .css('margin', '5px 5px 5px 0px')
            .attr('title', '(Paste from Clipboard)')
            .val('(Paste from Clipboard)')
            .focus(function () {
                $(this).val($(this).attr('title')).select();
            })
            .click(function () {
                $(this).focus();
            });
        var pasteCancel = $('<button type="button" />')
            .css('display', 'none')
            .css('font-size', '9px')
            .text('X');
        var pastePreview = $('<img />')
            .css('display', 'none');
        var pastePanel = $('<div />')
            .append(pasteReceiver)
            .append(pasteCancel)
            .append('<br />')
            .append(pastePreview);

        $(':file:visible[id^=ufile]').after(pastePanel);

        // Events
        pasteCancel.click(function () {
            var pasteCancel = $(this).hide();
            var pasteReceiver = pasteCancel.siblings('textarea');
            var pastePreview = pasteCancel.siblings('img');
            var pasteData = pasteCancel.parent().siblings('[id^=ufile]');

            pastePreview.slideUp(function () {
                pasteData.attr('type', 'file');
            });
            pasteReceiver.focus();
        });

        pasteReceiver.pastableTextarea() // paste.js
            .on('pasteImage', function (event, data) {
                var pasteReceiver = $(this);
                var pasteCancel = pasteReceiver.siblings('button');
                var pastePreview = pasteReceiver.siblings('img');
                var pasteData = pasteReceiver.parent().siblings('[id^=ufile]');

                pasteData.attr('type', 'text').val(data.dataURL);
                pastePreview.hide()
                    .attr('src', data.dataURL)
                    .attr('width', data.width)
                    .attr('height', data.height)
                    .slideDown();

                pasteCancel.show();
            });
    });
})(jQuery);