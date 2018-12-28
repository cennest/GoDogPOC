$(document).ready(function () {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        $('#hls_player').css('display', 'block');
        var player = videojs('hls_player');
        player.play();
    } else {
        $('#sldp_player_wrapper').css('display', 'block');;
        initSldpPlayer();
    }

    $("#username").text(localStorage.getItem('username') || 'Gary' + "!");
    $("#accordMenu").accordionMenu();
    $('.calendar').pignoseCalendar();

    var sldpPlayer;
    function initSldpPlayer() {
        sldpPlayer = SLDP.init({
            container: "sldp_player_wrapper",
            stream_url: "ws://104.248.182.51:8081/live/1",
            splash_screen : '../images/GoDogVideoSplash.png',
            height: 520,
            width: 680,
            autoplay: false
        });
    }

    function removePlayer() {
        sldpPlayer.destroy();
    }
});