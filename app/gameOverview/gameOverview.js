/**
 * Created by maxvasterd on 14/12/15.
 */

angular.module('myApp.gamesOverview', ['ngRoute', 'ngMaterial'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/gameOverview', {
            templateUrl: 'gameOverview/gameOverview.html',
            controller: 'gameController'
        });
    }])

    .controller('gameController', ['$scope', function($scope) {
        $scope.games = [];

        $scope.games = [
            { quests: '3',name: 'Informatica'},
            { quests: '6',name: 'Economie'},
            { quests: '22',name: 'Rechten'},
            { quests: '15',name: 'Schilder'},
            { quests: '14',name: 'Gamedesign'}
        ];


    }]);