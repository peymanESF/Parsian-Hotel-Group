$(document).ready(function () {
    $('.changeLanguage li a').click(function () {
        $(this).siblings('ul').toggleClass('show');
    });
    $("#totop-btn").click(scrollTop);
    $(window).scroll(function() {
        $(window).scrollTop() > 777 ? $("#totop-btn").addClass("active") : $("#totop-btn").removeClass("active")
    });
});
const indicators = document.querySelectorAll('.carousel-indicators li');
const triangle = document.querySelector('.indicator-triangle');
// وقتی که اسلاید تغییر می‌کند
const updateTrianglePosition = () => {
    setTimeout(() => {
        // پیدا کردن دات فعال
        const activeDot = document.querySelector('.carousel-indicators .active');

        // موقعیت افقی دات فعال
        const activeDotPosition = activeDot.offsetLeft;

        // تنظیم موقعیت مثلث
        triangle.style.transform = `translateX(${activeDotPosition}px)`;
    }, 1);
};
function scrollTop() {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
}
document.querySelector('#carouselExampleIndicators').addEventListener('slide.bs.carousel', updateTrianglePosition);
window.addEventListener('load', updateTrianglePosition);

$(function(){
    /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })


  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {

    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
        this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
          // hide every submenu as well
          everysubmenu.style.display = 'none';
        });
      })
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {

        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('submenu')) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          console.log(nextEl);
          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
      });
    })
  }
});