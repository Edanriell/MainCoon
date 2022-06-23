import "../sass/style.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";

import Swiper, {
	Navigation,
	Pagination,
	Autoplay,
	Keyboard,
	EffectCreative,
	EffectCoverflow
} from "swiper";

import {
	petsSlider320Params,
	teamSlider320Params,
	reviewsSlider320Params,
	petsSlider768Params,
	teamSlider768Params,
	reviewsSlider768Params,
	teamSlider1366Params,
	reviewsSlider1366Params
} from "./components/slider/sliderParams";

import Tabs from "./components/tabs/tabs";
import Accordion from "./components/accordion/accordion";

Swiper.use([Navigation, Pagination, Autoplay, Keyboard, EffectCreative, EffectCoverflow]);

window.addEventListener("load", () => {
	const petsSlider3201 = new Swiper(".PetsSlider320_1", petsSlider320Params);
	const petsSlider3202 = new Swiper(".PetsSlider320_2", petsSlider320Params);
	const petsSlider3203 = new Swiper(".PetsSlider320_3", petsSlider320Params);
	const teamSlider320 = new Swiper(".TeamSlider320", teamSlider320Params);
	const reviewsSlider320 = new Swiper(".ReviewsSlider320", reviewsSlider320Params);
	const petsSlider7681 = new Swiper(".PetsSlider768_1", petsSlider768Params);
	const petsSlider7682 = new Swiper(".PetsSlider768_2", petsSlider768Params);
	const petsSlider7683 = new Swiper(".PetsSlider768_3", petsSlider768Params);
	const teamSlider768 = new Swiper(".TeamSlider768", teamSlider768Params);
	const reviewsSlider768 = new Swiper(".ReviewsSlider768", reviewsSlider768Params);
	const teamSlider1366 = new Swiper(".TeamSlider1366", teamSlider1366Params);
	const reviewsSlider1366 = new Swiper(".ReviewsSlider1366", reviewsSlider1366Params);

	const petTabs = new Tabs({
		container: ".PetTabs-PetCategories",
		tabs: ".PetTabs-Tabs",
		initialActiveTab: "grown-cats-male"
	});

	const accordion = new Accordion({
		container: ".Accordion",
		alwaysOpen: true
	});

	petsSlider3201.init();
	petsSlider3202.init();
	petsSlider3203.init();
	teamSlider320.init();
	reviewsSlider320.init();
	petsSlider7681.init();
	petsSlider7682.init();
	petsSlider7683.init();
	teamSlider768.init();
	reviewsSlider768.init();
	teamSlider1366.init();
	reviewsSlider1366.init();
	petTabs.init();
	accordion.init();
});
