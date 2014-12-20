angular.module('starter')
.controller('MapController', ['MapFactory', 'MapSearchFactory', 'MarkerFactory', function(Map, SearchBox, Marker) {
  
  var map = Map.initialize();
  var myMarker = Map.geoLocate();

  SearchBox.initialize(map);

  this.goToPlace = function () {
    var places = SearchBox.searchBox.getPlaces();
    if (places.length) {
      Map.goToPlace(places[0])
    }
  }

  google.maps.event.addListener(SearchBox.searchBox, 'places_changed', this.goToPlace)

}])