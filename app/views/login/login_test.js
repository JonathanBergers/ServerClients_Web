/**
 * Created by maxvasterd on 06/01/16.
 */


describe('Module: myapp.login', function() {


    describe('Controller: loginController', function() {

        beforeEach(module('myapp.login'));

        var ctrl;

        beforeEach(inject(function($controller) {
            ctrl = $controller('loginController');
        }));


        it('should let me pass login', function() {
            ctrl.name = "admin";
            ctrl.password = "admin";

            expect(ctrl.control).toBe(true);
        });

        it('should not let me pass login', function() {
            ctrl.name = "bla";
            ctrl.password = "admin";

            expect(ctrl.control).toBe(false);
        });

    });

});
