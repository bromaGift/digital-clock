const weekDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

function currentTime() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var secs = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    secs = updateTime(secs);


    document.getElementById("clock").innerHTML = weekDays[day] + " " + hour + " : " + min + " : " + secs;

    var t = setTimeout(function(){ currentTime() }, 1000);
    }

    function updateTime(s) {
        if (s < 10) {
            return "0" + s;
        } else {
            return s;
        }
    }
    currentTime();



