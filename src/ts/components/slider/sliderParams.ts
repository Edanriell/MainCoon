import { SwiperOptions } from "swiper";

const petsSlider320Params: SwiperOptions = {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: false,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	navigation: {
		nextEl: ".PetsSlider320-PreviousSlideButton",
		prevEl: ".PetsSlider320-NextSlideButton"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: true
};

const teamSlider320Params: SwiperOptions = {
	loop: true,
	spaceBetween: 50,
	slidesPerView: 1,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		reverseDirection: true,
		pauseOnMouseEnter: true
	},
	navigation: {
		nextEl: ".TeamSlider320-ButtonNext",
		prevEl: ".TeamSlider320-ButtonPrev"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: true
};

const reviewsSlider320Params: SwiperOptions = {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	navigation: {
		nextEl: ".ReviewsSlider320-ButtonNext",
		prevEl: ".ReviewsSlider320-ButtonPrev"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: true
};

const petsSlider768Params: SwiperOptions = {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 16,
		slideShadows: false,
		scale: 1
	},
	keyboard: {
		enabled: true
	},
	navigation: {
		nextEl: ".PetsSlider768-PreviousSlideButton",
		prevEl: ".PetsSlider768-NextSlideButton"
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	loop: false
};

const teamSlider768Params: SwiperOptions = {
	loop: true,
	spaceBetween: 100,
	slidesPerView: 1,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		reverseDirection: true,
		pauseOnMouseEnter: true
	},
	navigation: {
		nextEl: ".TeamSlider768-ButtonNext",
		prevEl: ".TeamSlider768-ButtonPrev"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: true
};

const reviewsSlider768Params: SwiperOptions = {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	navigation: {
		nextEl: ".ReviewsSlider768-ButtonNext",
		prevEl: ".ReviewsSlider768-ButtonPrev"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: true
};

const teamSlider1366Params: SwiperOptions = {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	navigation: {
		nextEl: ".TeamSlider1366-ButtonNext",
		prevEl: ".TeamSlider1366-ButtonPrev"
	},
	keyboard: {
		enabled: true
	},
	grabCursor: true
};

const reviewsSlider1366Params: SwiperOptions = {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		reverseDirection: true,
		pauseOnMouseEnter: true
	},
	keyboard: {
		enabled: true
	},
	grabCursor: true,
	centeredSlides: true
};

export {
	petsSlider320Params,
	teamSlider320Params,
	reviewsSlider320Params,
	petsSlider768Params,
	teamSlider768Params,
	reviewsSlider768Params,
	teamSlider1366Params,
	reviewsSlider1366Params
};
