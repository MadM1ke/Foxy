// Burger - меню------------------------------------------------------------------
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener(
	"click",

	function () {
		burger.classList.toggle("burger--active");

		menu.classList.toggle("header__nav--active");
	}
);

menuLinks.forEach(function (element) {
	burger.classList.remove("burger--active");

	menu.classList.remove("header__nav--active");
});

// АККОРДЕОН------------------------------------------------------------------------

$(".accordion").accordion({
	heightStyle: "content",
	collapsible: true,
	active: null,
});

// Map------------------------------------------------------------------------------
ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("mapYandex", {
		center: [55.845926, 37.576151],
		zoom: 16,
	});

	var myPlacemark = new ymaps.Placemark(
		[55.845926, 37.576151],

		{},
		{
			iconLayout: "default#image",
			iconImageHref: "../img/flag-for-map.svg",
			iconImageSize: [48, 48],
			iconImageOffset: [-20, -48],
		}
	);
	myMap.geoObjects.add(myPlacemark);
}

// Popap
setTimeout(() => {
	document.querySelector("#modal-window-stock").classList.add("open");
}, 5000);

// Закрытие модального окна при нажатии на "Esc"
window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		document.getElementById("modal-window-stock").classList.remove("open");
	}
});

// Закрытие модального окна при нажатие на пустое место мне окна
document
	.querySelector("#modal-window-stock .modal__wrapper")
	.addEventListener("click", (event) => {
		event._isClickWithUnModal = true;
	});
document
	.getElementById("modal-window-stock")
	.addEventListener("click", (event) => {
		if (event._isClickWithInModal) return;
		event.currentTarget.classList.remove("open");
	});

// Swiper
const img__box = document.querySelector("#hero-bg");
const images = ["hero002.png", "hero003.png", "hero001.png"];
let imgNumber = 0;
setInterval(() => {
	img__box.style.backgroundImage = `url(../img/${images[imgNumber]})`;
	imgNumber = (imgNumber + 1) % images.length;
}, 5000);
