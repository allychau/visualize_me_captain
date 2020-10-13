
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

// Load in geojson data
var geoData = "static/data/alt_fuel_stations.json";

var geojson;

// Grab data with d3
d3.json(geoData, function(response) {


    console.log(response)
    
    // Create a new marker cluster group
    var markers = L.markerClusterGroup();

    // Loop through data
    for (var i = 0; i < response.fuel_stations.length; i++) {
  
      // Set the data location property to a variable
      var latitude = response.fuel_stations[i].latitude;
      var longitude = response.fuel_stations[i].longitude;

      var location = [];
      location.push(latitude)
      location.push(longitude)
  
      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([latitude, longitude])
        .bindPopup(response.fuel_stations[i].station_name));
      }
  
  // Add our marker cluster layer to the map
  map.addLayer(markers);

});




// Load in geojson data
var stateData = "static/data/gz_2010_us_040_00_500k (1).json";

// Grab data with d3
d3.json(stateData, function(data) {

  console.log(data)

    // Create a new choropleth layer
    geojson = L.choropleth(data, {

      // Define what  property in the features to use
      valueProperty: "MHI2016",
  
      // Set color scale
      scale: ["#ffffb2", "#b10026"],
  
      // Number of breaks in step range
      steps: 10,
  
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
        // Border color
        color: "#fff",
        weight: 1,
        fillOpacity: 0.8
      },
  

}).addTo(map);
});