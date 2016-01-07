'use strict';

angular.module('myApp.gameEditor', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/gameEditor', {
        templateUrl: 'views/gameEditor/gameEditor.html',
        controller: 'QuestMapController'
      });
    }])

    /*
     .config(function ($mdThemingProvider) {
     // Configure a dark theme with primary foreground yellow
     $mdThemingProvider.theme('docs-dark', 'default')
     .primaryPalette('yellow')
     .dark();
     })
    */

    .controller('QuestMapController', [ '$scope' , function($scope) {
      L.mapbox.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW5iZXJnZXJzIiwiYSI6ImNpaHcyczFyaDAyZXR1aGtvY256b2JoZm0ifQ.oI5PGaOb1mVPUpKpOWRI0g';
      var map = L.mapbox.map('map', 'mapbox.streets')
          .setView([52.221, 6.894], 17);

      $scope.newQuest = true;

      $scope.formVisible = new function () {
        return $scope.newQuest;
      };

      var featureGroup = L.featureGroup().addTo(map);

      var quests = [];

      var addQuest = function (title, description, type) {
        quests.push({title: title, description: description, type: type});
      };


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
        e.layers.eachLayer(function (layer) {
          showPolygonArea({layer: layer});
        });


      }

      function showPolygonArea(e) {

        if ($scope.newQuest) {
          //TODO
          // now enable the fields and wait for completion
          //featureGroup.clearLayers();

          featureGroup.addLayer(e.layer);

          e.layer.bindPopup((LGeo.area(e.layer) / 1000000).toFixed(2) + ' km<sup>2</sup>');
          e.layer.openPopup();

        } else {
          // do nothing
        }


      }
    }])

    /* FORM */
    .controller('inputController', [function () {
      var self = this;
      self.game = function(){};

      self.game = {
        title: 'Epy Drost',
        quest: 'Battle zone',
        description: 'Ga naar het Epy Drost gebouw\nen ga een gevecht aan met een andere speler!'
      };

      self.quests = ["Battle zone", "Discover objective"];


      var showButton = function() {
        if (self.title && self.description && self.date && self.timer) {
          alert("boe");
          angular.element("#quest-save-button").removeClass("invisible");
        }
      }

      return true;
    }]);