
var login = angular.module('myapp.login',['ngMaterial', 'ngRoute','ngStorage']);


login.controller('loginController', function ($http,$localStorage) {
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
            // this callback will be called asynchronously
            // when the response is available
            window.alert("inlog juist");
            window.alert(data);
            self.save = function() {
                $localStorage.token = data;
            }
            document.location.href = "../../index.html";
        }).
        error(function(data, status, headers, config) {
            window.alert("inlog onjuis");
            window.alert(data);
            window.alert(status);
            window.alert(headers);

        });
    }
});
