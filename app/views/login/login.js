
var login = angular.module('myapp.login',['ngMaterial', 'ngRoute']);


login.controller('loginController', function ($http) {
    var self = this;

    self.control = function () {

        var config = {headers:  {
            "name": self.name,
            "password": self.password,
            "Content-Type": 'application/x-www-form-urlencoded;charset=utf-8'
        }
        };
        $http.get("http://zaxion.nl/api/login/", config).
        success(function(data, status, headers, config) {
            sessionStorage.setItem("token", data);
            document.location.href = "../../index.html";
        }).
        error(function(data, status, headers, config) {
            self.name = "";
            self.password = "";
            window.alert("inlog gegevens zijn onjuist");
        });
    }
});
