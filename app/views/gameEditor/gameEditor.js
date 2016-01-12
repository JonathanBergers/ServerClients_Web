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
        mapbox_id: 'mapbox_id'
      };

      self.sendGameData = function() {

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

      return true;
    }]);;