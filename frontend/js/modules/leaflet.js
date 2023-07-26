/* eslint-disable use-isnan */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const leaflet = () => {
  const mapElement = document.querySelector('#map');
  if(mapElement){
    const map = L.map('map').setView([-3.71839, -38.54342], 12)
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)
  
    const _elementLat = -3.78151
    const _elementLong = -38.5026
    const _radius = 250
  
    const colorMarkerPm2 = {
      iconUrl: './assets/img/map-marker.png',
      iconRetinaUrl: './assets/img/map-marker.png',
      className: 'leaflet-pessima',
      iconSize: [40, 40],
    }
  
    const blocoTexto = `
        <div>
            <p>texto teste</p>
        </div>
      `
  
    let markerPoint = L.icon(colorMarkerPm2)
    L.Marker.prototype.options.icon = markerPoint
    L.marker([_elementLat, _elementLong], markerPoint).addTo(map).bindPopup(blocoTexto)
  }

  // var initialCoordinates = [-22.91, -43.2]
  // var initialZoomLevel = 16
  // var muxiIconProperties = {
  //   iconUrl: 'img/map-maker.png',
  // }

  // var map = L.map('map').setView(initialCoordinates, initialZoomLevel)

  // const osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  // map.addLayer(osm)
  // fetch('./assets/img/wifor-map.kml')
  //   .then((res) => res.text())
  //   .then((kmltext) => {
  //     // Create new kml overlay
  //     const parser = new DOMParser()
  //     const kml = parser.parseFromString(kmltext, 'text/xml')
  //     const track = new L.KML(kml)
  //     map.addLayer(track)

  //     // Adjust map to show the kml
  //     const bounds = track.getBounds()
  //     map.fitBounds(bounds)
  //   })
}

export { leaflet }
