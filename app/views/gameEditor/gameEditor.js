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
       title : null,
        id: null,
          punishTime: null
      };
        /**checks if the user input is valid for sending
         *
         * @returns {boolean}
         */
        self.validInput = function(){

            var title = self.game.title;
            var id = self.game.id;
            var punishTime = self.game.punishTime;

            if(title == null || title.length == 0){
                return false;
            }
            if(id == null || id.length == 0){
                return false;
            }
            return !(punishTime == null || punishTime <= 0);



    };

      self.sendGameData = function() {

          var gamesEndpoint = "http://localhost:8888/games"

          //TODO token header, LINK

          $http.post(gamesEndpoint, JSON.stringify(self.game)).
          success(function(data, status, headers, config) {
              window.alert(" SUCCESS "  +data + status)
              self.games = data
          }).
          error(function(data, status, headers, config) {
              window.alert("error posting game " + data + " " + status)
              // log error
          });


      };

      return true;
    }])

    /* TABLE */
    .controller('tableController', ['$http', function ($http) {

        var self = this;
        self.games = function(){};
        self.games = [
            {title: "test", id: "testId", punishTime: 10}
        ];

        // TODO TOKEN HEADER, CORRECT LINK

        var gamesEndpoint = "http://localhost:8888/games"
        $http.get(gamesEndpoint).
        success(function(data, status, headers, config) {
            window.alert(data)
            self.games = data
        }).
        error(function(data, status, headers, config) {
            window.alert("error retrieving games" + data + " " + status)
            // log error
        });



      return true;
    }]);;