$(document).ready(function () {
    if (!sessionStorage.getItem('username')) {
        window.location.href = '/index.html';
    }
});
