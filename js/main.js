/*global document, $, console */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/

        function onSlideDownComplete() {
            $('.readmore').hide();
            $('.readless').show();
        }

        /* This function will run when the slide up has finished */
        function onSlideUpComplete() {
            $('.readmore').show();
            $('.readless').hide();
        }

        /* Note we specifically select the a under the element with the class of readmore*/
        $('.readmore a').click(function (e) {
            e.preventDefault();

            /* Here we use the slideDown function asking it to take 1 second (1000 miliseconds)
             ** and when done call the onSlideDownComplete function we declared above */
            $('#show-this-on-click').slideDown(1000, onSlideDownComplete);
        });

        $('.readless a').click(function (e) {
            e.preventDefault();

            $('#show-this-on-click').slideUp(1000, onSlideUpComplete);
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