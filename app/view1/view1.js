'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

/*
  .config(function ($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  })

  .controller('QuestInputController', function($scope) {
    $scope.user = {
      title: 'Epy Drost',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Ga naar het Epy Drost gebouw\nen ga een gevecht aan met een andere speler!',
      postalCode: '94043'
    };
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
      return {abbrev: state};
    })
  })
*/

.controller('View1Ctrl', [function() {
  L.mapbox.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW5iZXJnZXJzIiwiYSI6ImNpaHcyczFyaDAyZXR1aGtvY256b2JoZm0ifQ.oI5PGaOb1mVPUpKpOWRI0g';
  var map = L.mapbox.map('map', 'mapbox.streets')
      .setView([38.89399, -77.03659], 17);


  var featureGroup = L.featureGroup().addTo(map);

  var drawControl = new L.Control.Draw({
    edit: {
      featureGroup: featureGroup
    },
    draw: {
      polygon: true,
      polyline: true,
      rectangle: true,
      circle: true,
      marker: true
    }
  }).addTo(map);

  map.on('draw:created', showPolygonArea);
  map.on('draw:edited', showPolygonAreaEdited);

  function showPolygonAreaEdited(e) {
    e.layers.eachLayer(function(layer) {
      showPolygonArea({ layer: layer });
    });
  }
  function showPolygonArea(e) {
    featureGroup.clearLayers();
    featureGroup.addLayer(e.layer);
    e.layer.bindPopup((LGeo.area(e.layer) / 1000000).toFixed(2) + ' km<sup>2</sup>');
    e.layer.openPopup();
  }
}]);