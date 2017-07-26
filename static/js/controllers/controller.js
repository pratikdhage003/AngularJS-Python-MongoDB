/**
 * Created by pratikdhage on 7/24/17.
 */

var app = angular.module("app", []);

app.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
}]);

app.controller("AppCtrl", function ($http) {
    var app = this;

    app.message = "let's solve it .....";

    var refreshData = function () {

        $http.get('http://0.0.0.0:8000/cities')
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

    app.findCity = function (enteredCity) {
        $http.get('http://0.0.0.0:8000/cities/' + enteredCity.cname).then(function (response) {

            console.log("inside findCity");
            console.log(enteredCity.cname);

            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            app.city = cdata.output;
            console.log(cdata.output);

        }, function (error) {
            console.log(error, 'can not get the given city data.');
        });
    }

    app.addCity = function (city) {
        $http.post('http://0.0.0.0:8000/cities', {"cname": city.cname, "state": city.state}).then(function (response) {
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
    }

    app.editCity = function (editCity) {
        $http.get('http://0.0.0.0:8000/cities/' + editCity.cname).then(function (response) {

            console.log("inside editCity");
            console.log(editCity.cname);

            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            app.editcity = cdata.output;
            console.log(cdata.output);

        }, function (error) {
            console.log(error, 'can not get the given city data.');
        });
    }

    app.updateCity = function (updatecity) {
        console.log("In the updateCity");
        $http.put('http://0.0.0.0:8000/cities/' + app.editcity.cname, {"cname": updatecity.cname}).then(function (response) {

            console.log("inside updateCity");
            console.log(app.editcity.cname + " .... " + updatecity.cname);

            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            app.editcity = cdata.output;
            console.log(cdata.output);

        }, function (error) {
            console.log(error, 'can not get the given city data.');
        });
    }

    app.deleteCity = function (deletecity) {
        $http.delete('http://0.0.0.0:8000/cities/' + deletecity.cname).then(function (response) {

            console.log("inside deleteCity");
            console.log(deletecity.cname);

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
    }

});