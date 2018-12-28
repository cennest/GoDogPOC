$(document).ready(function () {
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
        $($filedImage,).removeClass("active");
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
        $($filedImage,).removeClass("active");
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
        $($filedImage,).removeClass("active");
        $($control).removeClass("active");
      }
    });
});
