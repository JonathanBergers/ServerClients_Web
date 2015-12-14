'use strict';
var login = angular.module('login',['ngMaterial', 'ngRoute']);

function controller($scope)
{

    $scope.controle = function() {
        if($scope.name == "admin" && $scope.password == "admin")
        {
            document.location.href = "../app/"
        }
        else {
            window.alert("inlog gevens zijn onjuist");
            $scope.name = "";
            $scope.password ="";
        }
    }
}
login.controller('controller',controller);
