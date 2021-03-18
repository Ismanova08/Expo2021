$(document).on("ready", function () {
  $(".center").slick({
    infinite: true,
    focusOnChange: true,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    centerPadding: "100px",
  });
});
