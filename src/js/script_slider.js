var arrowLeft = document.getElementById('arrow_left'),
	arrowRight = document.getElementById('arrow_right'),
	allSlides = document.querySelectorAll('.slider__slide');

var showSlide = 0;

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSlide);

function showNextSlide() {
	allSlides[showSlide].style.display = 'none';

	if (showSlide < allSlides.length - 1) {
		showSlide++;
	} else {
		showSlide = 0;
	}
	
	allSlides[showSlide].style.display = 'block';
}

function showPreviousSlide() {

	allSlides[showSlide].style.display = 'none';

	if (showSlide !== 0) {
		showSlide--;
	} else {
		showSlide = allSlides.length - 1;
	}
	
	allSlides[showSlide].style.display = 'block';

}	

setInterval(showNextSlide, 8500);
