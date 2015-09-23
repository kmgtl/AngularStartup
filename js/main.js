/// <reference path="../bower_components/angular/angular.min.js" />
var loginapp = angular.module("logincomponent", [])
    .controller("loginctrl", function ($scope) {
        $scope.loginDetails = {
            name: '',
            password: ''
        };
        $scope.onSubmitClicked = function () {
            if($scope.loginDetails.name=="")
            {
                alert("Please Enter Name.");
                return;
            }
            if ($scope.loginDetails.password == "") {
                alert("Please Enter Password.");
                return;
            }
            if ($scope.loginDetails.name == "nosql" && $scope.loginDetails.password == "html5") {
                alert("welcome to the hell.");
            } else {
                alert("invalid user.");
            }
        };
    });