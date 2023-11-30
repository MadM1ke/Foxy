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
