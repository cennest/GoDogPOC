(function ($) {
  $.fn.serializeFormJSON = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || "");
      } else {
        o[this.name] = this.value || "";
      }
    });
    return o;
  };
})(jQuery);

$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    const loginData = $(this).serializeFormJSON();
    if (loginData.email && loginData.password) {
      localStorage.setItem('username', loginData.email);
      window.location.href = 'welcome.html';

      // $("#login-section").hide();
      // $("#welcome-section").show();
      // $("#username").text(loginData.user + "!");
      // initPlayer();
      // $("#accordMenu").accordionMenu();
      // $('.calendar').pignoseCalendar();

    } else {
      alert("Please Enter Email and Password.");
    }
  });
});
