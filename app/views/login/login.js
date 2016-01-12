'use strict';
var login = angular.module('myapp.login',['ngMaterial', 'ngRoute']);


login.controller('loginController', function ($http) {
    var self = this;

    self.control = function () {
        var parameter = JSON.stringify({username:self.name, password:self.name});
        $http.post("api/zaxion.nl/login", parameter).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            window.alert("inlog juist");
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            window.alert("inlog gevens zijn onjuist");
        });
        
    }

});
