var map;

function initMap() {
  // The location of Uluru
  var uluru = {lat: 41.884, lng: -87.632};  //Selecting Chicago
  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map, title: 'Initial Marker'});
}


function panHome() {
  var uluru = {lat:41.884 , lng: -87.632};
  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map, title: 'Initial Marker'});

//  for ('lat') in location                                                     :

}




// function search (){
//   var search= document.getElementById("library-name").value
//   var url= "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key="
//   var request = new XMLHttpRequest();
//   request.open('GET', url, true);
// }


function search() {
  var latTxt = document.getElementById("lat").value;
  var lngTxt = document.getElementById("lng").value;
  var lat = parseFloat(latTxt);
  var lng = parseFloat(lngTxt);

console.log(lat);
console.log(lng);

//  var location {
//    "Latitude":'lat';
//    "Longitude":'lng';
//  };
//  json.write(location);
//  var uluru = { lat: lat, lng: lng};
  var uluru = new google.maps.LatLng( lat, lng);

//  saveLocation(uluru);
  // The map, centered at Uluru

  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map, title: "User Added"});
  marker.setMap(map);

}
