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
  $.ajax({ url: '../users.json', method: "GET" })
    .success(function (response) {
      userJson = response.Users;
    });

  $("#loginForm").submit(function (event) {
    event.preventDefault();
    const loginData = $(this).serializeFormJSON();
    if (loginData.email && loginData.password) {
      var user = userJson.find(user => user.email === loginData.email && user.password === loginData.password);
      if (user) {
        sessionStorage.setItem('username', user.name);
        window.location.href = 'welcome.html';
      } else {
        $.notify("Please enter valid username or password.", { type: "danger" });
      }
      // $("#login-section").hide();
      // $("#welcome-section").show();
      // $("#username").text(loginData.user + "!");
      // initPlayer();
      // $("#accordMenu").accordionMenu();
      // $('.calendar').pignoseCalendar();

    } else {
      $.notify("Please enter valid username or password.", { type: "danger" });
    }
  });
});
