function countdown_spanner(time, unit){
    return '<span class="label">' + time + ' ' + unit + '</span> ';
};
function new_countdown(target_date) {
    var target_time = new Date(target_date).getTime();
    var current_time = new Date().getTime();
    var time_left = new Date(target_time - current_time);

    return (countdown_spanner(Math.floor(time_left / (1000 * 60 * 60 * 24)), 'days')
            + countdown_spanner(Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 'hr')
            + countdown_spanner(Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60)), 'min')
            + countdown_spanner(Math.floor((time_left % (1000 * 60)) / 1000), 'sec')).trim();
};

document.addEventListener('DOMContentLoaded', function () {
    var siteCountDown = function() {
        document.getElementById('date-countdown').innerHTML = new_countdown('2024/05/04');
    };
    setInterval(siteCountDown, 1000);
});