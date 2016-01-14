'use strict';

angular.module('myApp.gameEditor', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/gameEditor', {
        templateUrl: 'views/gameEditor/gameEditor.html',
        controller: 'inputController'
      });
    }])

    /* FORM */
    .controller('inputController', [function () {
      var self = this;
      self.game = function(){};

      self.game = {
        mapbox_id: ''
      };

      self.sendGameData = function() {
          var jsonString = JSON.stringify(self.game);
      }

      return true;
    }])

    /* TABLE */
    .controller('tableController', [function () {
      var self = this;
      self.games = function(){};

      self.games;

      self.getGames = function() {

      }

      self.getJSON = function() {

      }

      return true;
    }]);;