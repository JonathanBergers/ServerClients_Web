/**
 * Created by maxvasterd on 08/12/15.
 */
'use strict';

angular.module('myApp.view3', ['ngMaterial','ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html'
        });

    }])

    .config(function ($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    })

    .controller('QuestInputController', function($scope) {
        $scope.user = {
            title: 'Epy Drost',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Ga naar het Epy Drost gebouw\nen ga een gevecht aan met een andere speler!',
            postalCode: '94043'
        };
        $scope.states = ["Battle zone", "Discover objective"];
    });

