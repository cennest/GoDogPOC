$(document).ready(function () {
  $('.cam-control').hide();
  $('.camAudio-control').hide();
  $('select').formSelect();
  $('#fieldCam1').show();
  $('#fieldCamAudio1').show();

  $('#camera-select').on('change', function (e) {
    $('.cam-control').hide();
    $('#fieldCam' + e.target.value).show();
  });

  $('#camera-audio-select').on('change', function (e) {
    $('.camAudio-control').hide();
    $('#fieldCamAudio' + e.target.value).show();
  });

  $(".display-messages-container")
    .find("input[type=checkbox]")
    .on("change", function () {
      let $filedImage = $(this)
        .closest(".control-container")
        .find(".field-image");

      let $control = $(this).closest(".control")

      if ($(this).prop("checked")) {
        $($filedImage).addClass("active");
        $($control).addClass("active");
      } else {
        $($filedImage).removeClass("active");
        $($control).removeClass("active");
      }
    });

  $(".camera-control-container")
    .find("input[type=checkbox]")
    .on("change", function () {
      let $filedImage = $(this)
        .closest(".control-container")
        .find(".field-image");

      let $control = $(this).closest(".control")

      if ($(this).prop("checked")) {
        $($filedImage).addClass("active");
        $($control).addClass("active");
      } else {
        $($filedImage).removeClass("active");
        $($control).removeClass("active");
      }
    });

  $(".camera-audio-container")
    .find("input[type=checkbox]")
    .on("change", function () {
      let $filedImage = $(this)
        .closest(".control-container")
        .find(".field-image");

      let $control = $(this).closest(".control")

      if ($(this).prop("checked")) {
        $($filedImage).addClass("active");
        $($control).addClass("active");
      } else {
        $($filedImage).removeClass("active");
        $($control).removeClass("active");
      }
    });
});
