$(document).ready(function () {
    // if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    //     $('#hls_player').css('display', 'block');
    //     var player = videojs('hls_player');
    //     player.play();
    // } else {
    //     $('#sldp_player_wrapper').css('display', 'block');;
    //     initSldpPlayer();
    // }

    $("#username").text(sessionStorage.getItem('username') + "!");
    $("#accordMenu").accordionMenu();
    $('.calendar').pignoseCalendar();

    var playerInstance;
    initPlayer();
    function initPlayer() {
        playerInstance = jwplayer('jwPlayer');

        playerInstance.setup({
            file: 'http://157.230.210.134:8081/live/1/playlist.m3u8',
            mediaid: 'jwPlayer'
        });

        playerInstance.resize('100%', '100%');

        playerInstance.on('setupError', (msg) => {
            console.log('Setup Error', msg);
            $('.splashscreen-container').css('display', 'none');
        });

        playerInstance.on('play', () => {
            $('.splashscreen-container').css('display', 'none');
        });

        playerInstance.on('buffer', () => {
            $('.jw-display-icon-container').hide();
            $('.splashscreen-container').show();
        });

        playerInstance.on('error', (e) => {
            console.log('Error', e);
            $('.splashscreen-container').css('display', 'none');
        });

        playerInstance.on('idle', () => {
            $('.splashscreen-container').css('display', 'none');
        });
    }

    /*function removePlayer() {
        if (playerInstance) {
            playerInstance.remove();
        }
    }*/
});