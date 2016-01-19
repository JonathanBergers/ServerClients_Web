/**
 * Created by maxvasterd on 05/01/16.
 */

  describe('Module: myapp.gameEditor', function() {

    beforeEach(module('myApp.gameEditor'));

    describe('Controller: inputController', function(){

      var ctrl;

      beforeEach(inject(function($controller) {
        ctrl = $controller('inputController');
      }));

      it('should have these quests on load', function() {

        expect(ctrl.quests).toEqual(
            ["Battle zone", "Discover objective"]
        );

      });

      it('should have this game on load', function() {

        expect(ctrl.game).toEqual({
          description: 'Epy Drost',
          quest: 'Battle zone',
          description: 'Ga naar het Epy Drost gebouw\nen ga een gevecht aan met een andere speler!'
        });

      });

    });



  });