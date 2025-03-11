$(document).ready(function () {
	$('.changeLanguage li a').click(function(){
		$(this).siblings('ul').toggleClass('show');
	});
});
const indicators = document.querySelectorAll('.carousel-indicators li');
const triangle = document.querySelector('.indicator-triangle');
// وقتی که اسلاید تغییر می‌کند
const updateTrianglePosition = () => {
    // پیدا کردن دات فعال
    const activeDot = document.querySelector('.carousel-indicators .active');

    // موقعیت افقی دات فعال
    const activeDotPosition = activeDot.offsetLeft + 7 ;

    // تنظیم موقعیت مثلث
    triangle.style.transform = `translateX(${activeDotPosition}px)`;
};

document.querySelector('#carouselExampleIndicators').addEventListener('slid.bs.carousel', updateTrianglePosition);
window.addEventListener('load', updateTrianglePosition);
