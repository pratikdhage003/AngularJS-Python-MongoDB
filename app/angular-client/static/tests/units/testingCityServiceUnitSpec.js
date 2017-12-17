/**
 * Created by pratikdhage on 12/16/17.
 */

describe('factory : CityOpFactory', function () {

    var CityOpFactory, $http, $httpBackend;
    var baseURL = 'http://0.0.0.0:8001/todo/api/v1.0/cities';

    beforeEach(module('CityApp'));

    //get your service, also get $httpBackend
    // $httpBackend will be a mock.
    beforeEach(inject(function (_CityOpFactory_, _$http_, _$httpBackend_) {

        CityOpFactory = _CityOpFactory_;
        $http = _$http_;
        $httpBackend = _$httpBackend_;

       // $httpBackend.when('GET',  baseURL).respond()
    }));

    // make sure no expectations were missed in unit tests.
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});