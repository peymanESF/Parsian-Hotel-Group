$(document).ready(function () {
    $('.changeLanguage li a').click(function () {
        $(this).siblings('ul').toggleClass('show');
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

document.querySelector('#carouselExampleIndicators').addEventListener('slide.bs.carousel', updateTrianglePosition);
window.addEventListener('load', updateTrianglePosition);