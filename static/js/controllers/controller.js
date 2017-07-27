/**
 * Created by pratikdhage on 7/24/17.
 */

var app = angular.module("app", []);

app.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]);

app.controller("AppCtrl", function ($scope, $http) {
    var app = this;

    app.message = "let's solve it .....";

    var refreshData = function () {

        $http.get('http://0.0.0.0:8000/todo/api/v1.0/cities')
            .then(function (response) {
                var cdata = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;

                app.cities = cdata.results;
                console.log(cdata.results);
                console.log(status);
                app.city = "";

            }, function (error) {
                console.log(error, 'can not get data.');
            });

    };

    refreshData();

    app.addCityState = function (city) {
        $http.post('http://0.0.0.0:8000/todo/api/v1.0/cities', {"cname": city.cname, "state": city.state}).then(function (response) {
            console.log(".....addCity.....");
            console.log(city.cname);
            console.log(city.state);

            app.cities.push(response.data.output);

            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            app.city = cdata.output;
            console.log(cdata.output);

            refreshData();

        }, function (error) {
            console.log(error, 'can not post the city data.');
        });

    };

    app.editState = function (city) {
        $http.get('http://0.0.0.0:8000/todo/api/v1.0/cities/' + city.cname).then(function (response) {

            console.log("inside editCity");
            console.log(city.cname);
            console.log(city.state);


            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            $scope.city = cdata.output;

        }, function (error) {
            console.log(error, 'can not get the given city data.');
        });
    };

    // updates the state for a given city
    app.updateState = function (city) {
        if (city.cname !== '' &&  city.state !== '') {
            $http.put('http://0.0.0.0:8000/todo/api/v1.0/cities/' + city.cname, {
                "cname": city.cname,
                "state": city.state
            }).then(function (response) {


                var cdata = response.data;
                var status = response.status;
                var statusText = response.statusText;
                var headers = response.headers;
                var config = response.config;

                console.log(status);
                $scope.city = cdata.output;
                console.log(cdata.output);

            }, function (error) {
                console.log(error, 'can not update given city data.');
            });
        }


    }

    app.deleteCityState = function (city) {
        $http.delete('http://0.0.0.0:8000/todo/api/v1.0/cities/' + city.cname).then(function (response) {

            console.log("inside deleteCity");
            console.log(city.cname);

            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            app.city = cdata.output;
            console.log(cdata.output);
            refreshData();

        }, function (error) {
            console.log(error, 'can not delete the given city data.');
        });
    };

});