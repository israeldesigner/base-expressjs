const leaflet =() =>{

    var initialCoordinates = [-22.91, -43.20];
    var initialZoomLevel = 16;
    var muxiIconProperties = {
        iconUrl: "img/map-maker.png"
    };

    var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

    const osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(osm);
    fetch('wifor-map.kml')
    .then(res => res.text())
    .then(kmltext => {
        // Create new kml overlay
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmltext, 'text/xml');
        const track = new L.KML(kml);
        map.addLayer(track);

        // Adjust map to show the kml
        const bounds = track.getBounds();
        map.fitBounds(bounds);
    });


}

export { leaflet };
