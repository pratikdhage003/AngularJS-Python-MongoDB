/**
 * Created by pratikdhage on 7/24/17.
 */

var app = angular.module("app", []);

app.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]);

app.controller("AppCtrl", function ($scope, $http) {
    var app = this;

    var refreshData = function () {
        $http.get('http://0.0.0.0:8001/todo/api/v1.0/cities')
            .then(function (response) {
                app.cities = response.data.results;
                app.city = "";

            }, function (error) {
                console.log(error, 'can not get data.');
            });
    };

    refreshData();

    app.addCityState = function (city) {
        $http.post('http://0.0.0.0:8001/todo/api/v1.0/cities', {"cname": city.cname, "state": city.state}).then(function (response) {

            app.cities.push(response.data.output);
            $scope.city = response.data.output;
            refreshData();

        }, function (error) {
            console.log(error, 'can not post the city data.');
        });
    };

    app.editState = function (city) {
        $http.get('http://0.0.0.0:8001/todo/api/v1.0/cities/' + city.cname).then(function (response) {

            $scope.city = response.data.output;

        }, function (error) {
            console.log(error, 'can not get the given city data.');
        });
    };

    // updates the state for a given city
    app.updateState = function (city) {
        if (city.cname !== '' &&  city.state !== '') {
            $http.put('http://0.0.0.0:8001/todo/api/v1.0/cities/' + city.cname, {
                "cname": city.cname,
                "state": city.state
            }).then(function (response) {

                $scope.city = response.data.output;
                refreshData();

            }, function (error) {
                console.log(error, 'can not update given city data.');
            });
        }
    };

    app.deleteCityState = function (city) {
        $http.delete('http://0.0.0.0:8001/todo/api/v1.0/cities/' + city.cname).then(function (response) {

            $scope.city = response.data.output;
            refreshData();

        }, function (error) {
            console.log(error, 'can not delete the given city data.');
        });
    };

});