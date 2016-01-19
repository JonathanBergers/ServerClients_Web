'use strict';

angular.module('myApp.gameEditor', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/gameEditor', {
        templateUrl: 'views/gameEditor/gameEditor.html',
        controller: 'inputController'
      });
    }])

    /* FORM */
    .controller('inputController', ['$http', function ($http) {
      var self = this;
      //self.game = function(){};

      self.game = {
       description : null,
       locationId: null,
       timeOut: 1
      };
        /**checks if the user input is valid for sending
         *
         * @returns {boolean}
         */
        self.validInput = function(){

            var title = self.game.description;
            var mapBoxId = self.game.locationId;
            var punishTime = self.game.timeOut;

            if(title == null || title.length == 0){
                return false;
            }
            if(mapBoxId == null || mapBoxId.length == 0){
                return false;
            }
            return !(punishTime == null || punishTime <= 0);

    };

        var config = {
            headers: {
                "token": sessionStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        };
        var gamesEndpoint = "http://zaxion.nl/api/games";

        self.sendGameData = function() {
          $http.post(gamesEndpoint, JSON.stringify(self.game), config).
          success(function(data, status, headers, config) {
              $route.reload();

          }).
          error(function(data, status, headers, config) {
              window.alert("error posting game " + data + " " + status)
              // log error
          });


      };

      return true;
    }])

    /* TABLE */
    .controller('tableController', ['$http' , function ($http) {

        var self = this;



        self.editGame = function(game){
            window.location.href= "http://www.mapbox.com/editor/" + game.locationId

        }
        // TODO TOKEN HEADER, CORRECT LINK
        var config = {
            headers: {
                "token": sessionStorage.getItem('token')
            }
        }
        var gamesEndpoint = "http://zaxion.nl/api/games"
        $http.get(gamesEndpoint, config).
        success(function(data, status, headers, config) {
            //window.alert(data)
            self.games = data
        }).
        error(function(data, status, headers, config) {
            window.alert("error retrieving games" + data + " " + status)
            // log error
        });



      return true;
    }]);;