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


    $http.get('http://localhost:5000/cities')
        .then(function (response) {
            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            app.cities = cdata.results;
            console.log(cdata.results);
            console.log(status);

        }, function (error) {
            console.log(error, 'can not get data.');
        });


    app.findCity = function (enteredCity) {
        $http.get('http://localhost:5000/cities/' + enteredCity.cname).then(function (response) {

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

    app.addCity = function (newcity) {
        $http.post('http://localhost:5000/cities', {"cname": newcity.cname, "state": newcity.state}).then(function (response) {
            console.log(".....addCity.....");
            console.log(newcity.cname);
            console.log(newcity.state);

            app.cities.push(response.data.output);

            var cdata = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;

            console.log(status);
            app.city = cdata.output;
            console.log(cdata.output);

        }, function (error) {
             console.log(error, 'can not post the city data.');
        });
    }

    app.editCity = function (editCity) {
        $http.get('http://localhost:5000/cities/' + editCity.cname).then(function (response) {

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
        $http.put('http://localhost:5000/cities/' + app.editcity.cname ,{"cname": updatecity.cname}).then(function (response) {

            console.log("inside updateCity");
            console.log(app.editcity.cname +" .... "+ updatecity.cname);

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
        $http.delete('http://localhost:5000/cities/' + deletecity.cname).then(function (response) {

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

        }, function (error) {
            console.log(error, 'can not delete the given city data.');
        });
    }

});