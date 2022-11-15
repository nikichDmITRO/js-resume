$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $("#menu a").click(function () {
    $(document).off("scroll");

    var navLink = $(this).attr("href"),
      dest = $(navLink).offset().top - 50;
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: dest,
        },
        800,
        function () {
          $(document).on("scroll", onScroll);
        }
      );

    $("#menu a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    return false;
  });

  $("#btn-menu").click(function () {
    if ($("#menu").hasClass("visible")) {
      $("#menu").removeClass("visible");
    } else {
      $("#menu").addClass("visible");
    }
  });
  $("#menu a").click(function () {
    if ($("#menu").hasClass("visible")) {
      // $('.navigation').removeClass('visible');
      $("#menu").removeClass("visible");
    }
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop() + 300;
    $("#menu a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos) {
        $("#menu li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });

   
  }

  let viewport = $("#viewport").width();
  let slider = $("div.slider");
  let viewSliders = $(".viewSlide");
  let viewSlide = 0;

  viewSliders[viewSlide].style.backgroundColor = "#6962adce";

  $(".next").click(function () {
    viewSliders[viewSlide].style.backgroundColor = "#d2e0e9ee";
    if (viewSlide < 5) {
      viewSlide++;
    } else {
      viewSlide = 0;
    }
    viewSliders[viewSlide].style.backgroundColor = "#6962adce";
    slider.animate({ left: -viewSlide * viewport + "px" }, { duration: 1200 });
  });

  $(".prev").click(function () {
    viewSliders[viewSlide].style.backgroundColor = "#d2e0e9ee";
    if (viewSlide > 0) {
      viewSlide--;
    } else {
      viewSlide = 5;
    }
    viewSliders[viewSlide].style.backgroundColor = "blue";
    slider.animate({ left: -viewSlide * viewport + "px" }, { duration: 1200 });
  });
});
