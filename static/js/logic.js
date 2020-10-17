// Adding tile layer
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
})
  
// Initialize all of the LayerGroups we'll be using
var layers = {
  CHARGING_STATION: new L.LayerGroup(),
  CARBON_EMISSIONS: new L.LayerGroup()
};

// Create the map with our layers
var map = L.map("map", {
  center: [36.1534591, -99.7263189],
  zoom: 5,
  layers: [
    layers.CHARGING_STATION,
    layers.CARBON_EMISSIONS
  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
  "Charging Stations": layers.CHARGING_STATION,
  "Carbon Emissions": layers.CARBON_EMISSIONS
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(map);

// Load in data from url
const url = "/stations";

// Grab data with d3
d3.json(url, function(response) {
  
    // Create a new marker cluster group
    var markers = L.markerClusterGroup();
    // Loop through data
    for (var i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable
      var latitude = response[i].latitude;
      var longitude = response[i].longitude;
      var station = response[i].station_name;
      console.log("latittude:", latitude);
      console.log("longitude: ", longitude);
      console.log("station: ", station);

      var location = [];
      location.push(latitude)
      location.push(longitude)
  
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([latitude, longitude])
        .bindPopup(response[i].station_name));
      }
  
  // Add our marker cluster layer to the map
  map.addLayer(markers);

});
