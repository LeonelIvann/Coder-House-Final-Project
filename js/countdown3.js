/* orden de fecha mes/dia/año */
var end = new Date('4/01/2021 12:01 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('cuenta_atras_3').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('cuenta_atras_3').innerHTML = days + ' dias, ';
        document.getElementById('cuenta_atras_3').innerHTML += hours + ' horas, ';
        document.getElementById('cuenta_atras_3').innerHTML += minutes + ' minutos y ';
        document.getElementById('cuenta_atras_3').innerHTML += seconds + ' segundos';
    }

    timer = setInterval(showRemaining, 1000);