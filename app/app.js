'use strict';

// Declare app level module which depends on views, and components

var appModule =  angular.module('myApp', [
    'ngMaterial',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      otherwise({redirectTo: '/view1'});
}]);



appModule.controller('NavController', ['$scope', function($scope, $mdSidenav) {
  $scope.toggleNav = function(){
    $mdSidenav('left').toggle();
  };


  //ADD TABS FOR VIEWS
  $scope.tabs = [ {title: "Games", url: "#/games"}, {title: "Users", url: "#/users"}];
}]);

//
//(function(){
//  'use strict';
//
//  // Prepare the 'users' module for subsequent registration of controllers and delegates
//  angular.module('myApp', [ 'ngMaterial' ]);
//
//
//})();
