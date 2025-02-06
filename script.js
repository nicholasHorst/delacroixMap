// Initialize Leaflet map
const map = L.map('map', {
    minZoom: 0,
    maxZoom: 5,  // Adjust based on the number of zoom levels in your tiles
    center: [0, 0], // Adjust to match your map's starting position
    zoom: 2
});

// Load the tile layer
L.tileLayer('./tiles/{z}/{x}/{y}.png', {
    attribution: 'Delacroix Map by Nick',
    tileSize: 256,
    noWrap: true
}).addTo(map);
