'use strict';
var login = angular.module('myapp.login',['ngMaterial', 'ngRoute']);


login.controller('loginController', function () {
    var self = this;


    self.control = function () {

        if(self.name == "admin" && self.password == "admin") {
            document.location.href = "../../../"
            return true;
        } else {
            window.alert("inlog gevens zijn onjuist");
            self.name = "";
            self.password ="";
            return false;
        }
    }

});
