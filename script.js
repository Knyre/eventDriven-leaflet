const map = L.map("map").setView([8.37, 124.86], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const marker = L.marker([8.37, 124.86]).addTo(map);

marker.bindPopup("<b>Manolo Fortich</b><p>Welcome to Bukidnon!</p>");

L.circle([8.37, 124.86], {
  color: "blue",
  fillColor: "#30a3ec",
  fillOpacity: 0.3,
  radius: 500,
}).addTo(map);

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  L.popup()
    .setLatLng(event.latlng)
    .setContent(
      "Latitude: " + lat.toFixed(5) + "<br>Longitude: " + lng.toFixed(5),
    )
    .openOn(map);
});

const locations = [
  { name: "School", lat: 8.37, lng: 124.86 },
  { name: "Hospital", lat: 8.375, lng: 124.865 },
  { name: "Park", lat: 8.365, lng: 124.855 },
  { name: "Among Balay", lat: 8.36768, lng: 124.86807 },
];

locations.forEach(function (place) {
  L.marker([place.lat, place.lng]).addTo(map).bindPopup(place.name);
});
