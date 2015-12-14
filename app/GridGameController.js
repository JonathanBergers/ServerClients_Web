var gameOverzicht = angular.module('gameOverzicht',['ngMaterial']);
function gameController($scope){

    $scope.games = [
        { quests: '3',name: 'Informatica'},
        { quests: '6',name: 'Economie'},
        { quests: '22',name: 'Rechten'},
        { quests: '15',name: 'Schilder'},
        { quests: '14',name: 'Gamedesign'}
    ];

}

gameOverzicht.controller('gameController',gameController);

