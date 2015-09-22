/*global document, $, console */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/

        $('.readmore').click(function (e) {
            e.preventDefault();
            console.log('readmore clicked', e);

            $('#show-this-on-click').slideDown();
            $('#show-this-on-click').show();
            $('.readmore').hide();
            $('.readless.hide').show();
        });

        $('.readless.hide').click(function (e) {
            e.preventDefault();
            console.log('readless clicked', e);

            $('#show-this-on-click').slideUp();
            $('.readless.hide').hide();
            $('.readmore').show(1000);
            /* I am not sure why this is coming in from the left but it is showing Readmore again and the functionality works ? */
        });

        $('.learnmore').click(function (e) {
            e.preventDefault();
            console.log('learnmore clicked', e);

            $('span').slideDown();
            $('span').show();
            $('.learnmore').hide();
        });
        /*$('#show-this-on-click').hide();*/

        /* ----- Finish writing your JavaScript here  -----*/
    });
}());