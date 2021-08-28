mapboxgl.accessToken = 
  "pk.eyJ1IjoiZ2VybWFnZXJtYW5hIiwiYSI6ImNrc211NDRkdTE5czUydnBjY2RieWhsMjQifQ.TnjhmFJKCUHPx3biYQ4aow"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true}) 
  // will show a popup "this browser wants to see your location"

function successLocation(position){
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
  setupMap([-2.24, 53.48])
 }

function setupMap(center){
  const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: center,
  zoom: 15
  })

  // for zoom in and zoom out
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/cycling"
})

  map.addControl(directions, "top-left")
}


  