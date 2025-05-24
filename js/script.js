// شروع jquery
$(document).ready(function () {
  // پاپ آپ خبرنامه
  $(".club-container-btn-join").click(function () {
    $(".popup-club").addClass("active");
    $("body").css("overflow", "hidden");
  });
  $(".popup-club-close").click(function () {
    $(".popup-club").removeClass("active");
    $("body").css("overflow", "auto");
  });

  // هدر موبایل
  $(".header-menu-tel-btn").click(function () {
    $(".container-menu-moblie ").addClass("active");
    $("body").css("overflow", "hidden");
  });

  $(".popup-menu-close").click(function () {
    $(".container-menu-moblie").removeClass("active");
    $("body").css("overflow", "auto");
  });

  // عدم تطابق رمز-ثبت نام
  $(".form-register").submit(function (e) {
    let password = $("#register-password").val();
    let confirm_password = $("#register-confirm-password").val();

    if (password !== confirm_password) {
      e.preventDefault();
      $(".error-message-password").show();
      $(".message-register").hide();
      setTimeout(() => {
        $(".error-message-password").fadeOut();
      }, 4000);
    } else {
      e.preventDefault();
      $(".error-message-password").hide();
      $(".message-register").show();

      setTimeout(() => {
        $(".form-register").off("submit").submit();
      }, 1000);
    }
  });

  // ارسال گذرواژه
  $(".form-forgot-password").submit(function (e) {
    e.preventDefault();
    let tel_forgot_password = $("#forgot-password-tel").val();

    let message_forgot_password = `<p>لینک تغییر گذرواژه به شماره ${tel_forgot_password} ارسال شد.</p>`;

    $(".message-forgot-password").html(message_forgot_password);

    $("#forgot-password-tel").val("");

    $(".message-forgot-password").css("display", "block");
  });

  // فرم ورود - ثبت نام
  $(".show-login a").click(function (e) {
    e.preventDefault();
    $(".container-login").css("visibility", "visible");
    $(".container-register,.container-forgot-password").css(
      "visibility",
      "hidden"
    );
  });

  $(".show-register a").click(function (e) {
    e.preventDefault();
    $(".container-register").css("visibility", "visible");
    $(".container-login,.container-forgot-password").css(
      "visibility",
      "hidden"
    );
  });

  $(".show-forgot-password a").click(function (e) {
    e.preventDefault();
    $(".container-forgot-password").css("visibility", "visible");
    $(".container-login,.container-login").css("visibility", "hidden");
  });
});

// نمایش رمز عبور
$(".show-password").click(function () {
  let targetclass = $(this).data("target");
  let input = $("#" + targetclass);
  let button = $(this).find("i");

  if (input.attr("type") == "password") {
    input.attr("type", "text");
    button.toggleClass("fa-eye fa-eye-slash");
  } else {
    input.attr("type", "password");
    button.toggleClass("fa-eye-slash fa-eye");
  }
});

// ریسپانسیو
function removeElementByDevice() {
  var width = $(window).width();

  if (width >= 1024) {
    // حذف در دسکتاپ
    $(".header-bottom input").remove();
    $(".header-top .header-menu-tel-btn").remove();
    $(".container-home-category-list-Swiper-moblie").remove();
    $(".container-menu-moblie").remove();
  } else if (width >= 768 && width < 1024) {
    // حذف در تبلت
    $(".header-bottom input").remove();
    $(".container-home-category-list-Swiper-moblie").remove();
    $(".header-top .header-menu-tel-btn").remove();
    $(".container-menu-moblie").remove();
  } else {
    // حذف در موبایل
    $(".header-bottom nav").remove();
    $(".header-top input").remove();
    $(".container-home-category-list").remove();
    $(".home-slider-farsh-title a").remove();
  }
}

$(document).ready(removeElementByDevice);
$(window).resize(removeElementByDevice);

// پاین jquery
