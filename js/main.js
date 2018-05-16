yengin.ready(function () {

    var cfg = {
        obj: 'map',
        lat: 43.6, lng: 1.4333, zoom: 14,
        sources: {
            osm: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            mapbox: 'http://{s}.tiles.mapbox.com/v3/phil6611.ikebkh58/{z}/{x}/{y}.png'
        },
        copyleft: {
            osm: '<a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>',
            mapbox: '<a href="http://mapbox.com/" target="_blank">Mapbox</a>'
        }
    };

    /* Leaftlet */

    var map = L.map(cfg.obj, {
        center: [ cfg.lat, cfg.lng ],
        zoom: cfg.zoom
    });

    L.tileLayer(cfg.sources.mapbox,{
        attribution: [
            cfg.copyleft.osm,
            cfg.copyleft.mapbox
        ].join(' | ')
    }).addTo(map);

    /* Search */

    var searchLayer = L.layerGroup().addTo(map);

});
