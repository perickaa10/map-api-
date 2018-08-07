function initMap() {
  // The location of Uluru
  var uluru = {lat: 41.884, lng: -87.632};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

function panHome() {
  var uluru = {lat:41.884 , lng: -87.632};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}


// function search (){
//   var search= document.getElementById("library-name").value
//   var url= "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key="
//   var request = new XMLHttpRequest();
//   request.open('GET', url, true);
// }

function search (){
  var lat = document.getElementById("lat").value
  var long = document.getElementById("long").value

  var uluru = { lat: parseInt(lat) , lng: parseInt(long) };

  console.log('here')
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});

}
