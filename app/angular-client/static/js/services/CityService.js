/**
 * Created by pratikdhage on 12/15/17.
 */

var CityService = angular.module('CityService', []);

//created angular Service factory called 'CityOpFactory'

CityService.factory('CityOpFactory', ['$http', function ($http) {

    var baseURL = 'http://0.0.0.0:8001/todo/api/v1.0/cities';
    var CityOpFactory = {};

    CityOpFactory.refreshCityStateService = function () {
        return $http.get(baseURL);
    };


    CityOpFactory.addCityStateService = function (cityrecord) {

        var newrecord = {
            "cname": cityrecord.cname,
            "state": cityrecord.state
        }
        return $http.post(baseURL, newrecord);

    };


    CityOpFactory.deleteCityStateService = function (cityrecord) {
        return $http.delete(baseURL +'/' + cityrecord.cname);
    };


    CityOpFactory.editCityStateService = function (cityrecord) {
        return $http.get(baseURL +'/' + cityrecord.cname);
    };


    CityOpFactory.updateCityStateService = function (cityrecord) {

        return $http.put(baseURL +'/' + cityrecord.cname, {
            "cname": cityrecord.cname,
            "state": cityrecord.state
        });
    };

    return CityOpFactory;

}]);