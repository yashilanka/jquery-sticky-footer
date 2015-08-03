/**
 * @param {Object} $ The jQuery library
 */
(function($) {

    /**
     * Define a jQuery object method called stickyFooter to position a footer at the bottom of the page.
     *
     * @param {Object} options (Optional)
     * @return {selector}
     */
    $.fn.stickyFooter = function(options) {

        return this.each(function() {
            var footer = this;
            var content = $(footer).prev();
            var footerHeight = $(footer).outerHeight(true);

            $('html, body').css('height', '100%');

            $(content).css({
                marginBottom: '-' + footerHeight + 'px',
                minHeight: '100%'
            });

            // To avoid to include an external css, the css rules are attached via jQuery.
            $("body").append(
                '<style>' +
                    'body > *:first-child:after {' +
                        'content: "";' +
                        'display: block;'+
                        'height: ' + footerHeight + 'px;' +
                    '}' +
                '</style>'
            );
        });
    };
}(jQuery));
