'use strict';

// Declare app level module which depends on views, and components

var appModule =  angular.module('myApp', [
  'ngMaterial',
  'ngRoute',
  'myApp.gameEditor',
  'myApp.gamesOverview',
  'myApp.version'

]).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider.
          otherwise({redirectTo: '/gameEditor'});

    }])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('orange');
    });



appModule.controller('NavController', ['$scope', function($scope, $mdSidenav) {
  var self = this;

  self.toggleNav = function(){
    $mdSidenav('left').toggle();
  };


  //ADD TABS FOR VIEWS
  $scope.tabs = [ {title: "Games", url: "#/gameOverview"}, {title: "Users", url: "#/users"}];
}]);

