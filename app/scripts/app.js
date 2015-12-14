'use strict';

// Declare app level module which depends on views, and components

var appModule =  angular.module('myApp', [
    'ngMaterial',
  'ngRoute',
  'myApp.createGameView',
  'myApp.gamesOverview',
  'myApp.version'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      otherwise({redirectTo: '/gamesOverview'});
}]);



appModule.controller('NavController', ['$scope', function($scope, $mdSidenav) {
  $scope.toggleNav = function(){
    $mdSidenav('left').toggle();
  };


  //ADD TABS FOR VIEWS
  $scope.tabs = [ {title: "Games", url: "#/gamesOverview"}, {title: "Users", url: "#/users"}];
}]);

