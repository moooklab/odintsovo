var map
const adresses = [
    {
        name: 'Офис в Москве',
        coordinate: [55.802750, 37.584604]
    }, {
        name: 'Офис в Cанкт-Петербурге',
        coordinate: [59.989454, 30.370261]
    }
]


ymaps.ready(function(){
    map1 = new ymaps.Map('map1', {
        controls: ["zoomControl"],
        center: adresses[0].coordinate,
        zoom: 16,
    })
    map2 = new ymaps.Map('map2', {
        controls: ["zoomControl"],
        center: adresses[1].coordinate,
        zoom: 16,
    })
    var placemark1 = new ymaps.Placemark(adresses[0].coordinate, { hintContent: adresses[0].name, }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin.svg',
        iconImageSize: [68, 85],
        iconImageOffset: [-35, -50]
    })
    var placemark2 = new ymaps.Placemark(adresses[1].coordinate, { hintContent: adresses[1].name, }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin.svg',
        iconImageSize: [68, 85],
        iconImageOffset: [-35, -50]
    })
    map1.geoObjects.add(placemark1)
    map1.behaviors.disable('scrollZoom')
    map2.geoObjects.add(placemark2)
    map2.behaviors.disable('scrollZoom')
})