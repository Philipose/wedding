jQuery(document).ready(function($) {
    var siteCountDown = function() {

        $('#date-countdown').countdown('2024/05/04', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span class="countdown-block"><span class="label">%D</span> days </span>'
            + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
            + '<span class="countdown-block"><span class="label">%M</span> min </span>'
            + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
        });
                
    };
    siteCountDown();
});