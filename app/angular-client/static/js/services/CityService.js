/**
 * Created by pratikdhage on 12/15/17.
 */

"use strict";

var CityService = angular.module('CityService', []);

//created angular Service factory called 'CityFactoryAPI'

CityService.factory('CityFactoryAPI', ['$http', function ($http) {

    var baseURL = 'http://0.0.0.0:8001/todo/api/v1.0/cities/';
    var CityFactoryAPI = {};

    CityFactoryAPI.refreshCityStateService = function () {

        return $http({method: 'GET', url: baseURL});
    };


    CityFactoryAPI.addCityStateService = function (cityrecord) {

        return $http({method: 'POST', url: baseURL, data: cityrecord});
    };


    CityFactoryAPI.deleteCityStateService = function (cityrecord) {

        return $http({method: 'DELETE', url: baseURL + cityrecord.cname});
    };


    CityFactoryAPI.editCityStateService = function (cityrecord) {

        return $http({method: 'GET', url: baseURL + cityrecord.cname});
    };


    CityFactoryAPI.updateCityStateService = function (cityrecord) {

        return $http({
            method: 'PUT', url: baseURL + cityrecord.cname, data: {
                "cname": cityrecord.cname,
                "state": cityrecord.state
            }
        });
    };

    return CityFactoryAPI;

}]);