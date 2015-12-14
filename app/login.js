'use strict';
var login = angular.module('login',['ngMaterial', 'ngRoute']);

function controller($scope)
{

    $scope.controle = function() {
        if($scope.name == "admin" && $scope.wachtwoord == "admin")
        {
            document.location.href = "index.html"
        }
        else {
            window.alert("inlog gevens zijn onjuist");
            $scope.name = "";
            $scope.wachtwoord ="";
        }
    }
}
login.controller('controller',controller);
