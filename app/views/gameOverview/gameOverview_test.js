/**
 * Created by maxvasterd on 06/01/16.
 */

describe('Module: myapp.gameOverview', function() {

    beforeEach(module('myApp.gamesOverview'));

    describe('Controller: gameController', function () {


        var ctrl

        beforeEach(inject(function($controller) {
            ctrl = $controller('gameController');
        }));

        it ('should have these games on load', function () {

            expect(ctrl.games).toEqual(
                [
                    { quests: '3',name: 'Informatica'},
                    { quests: '6',name: 'Economie'},
                    { quests: '22',name: 'Rechten'},
                    { quests: '15',name: 'Schilder'},
                    { quests: '14',name: 'Gamedesign'}
                ]
            );
        });
    });
});

