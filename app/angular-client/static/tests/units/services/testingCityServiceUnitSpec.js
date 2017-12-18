/**
 * Created by pratikdhage on 12/16/17.
 */

describe('factory : CityFactoryAPI', function () {

    var CityFactoryAPI, $http, $httpBackend, cityrecord;
    var baseURL = 'http://0.0.0.0:8001/todo/api/v1.0/cities/';

    beforeEach(module('CityApp'));

    //get your service, also get $httpBackend
    // $httpBackend will be a mock.
    beforeEach(inject(function (_CityFactoryAPI_, _$http_, _$httpBackend_) {
        CityFactoryAPI = _CityFactoryAPI_;
        $http = _$http_;
        $httpBackend = _$httpBackend_;
    }));

    // make sure no expectations were missed in unit tests.
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('function : refreshCityStateService', function () {
        // A sample test case for refreshing/ getting all entries

        it('should display all the cities', function () {

            var samplecitydata = {
                "output": [
                    {
                        "cname": "New York",
                        "state": "NY"
                    },
                    {
                        "cname": "Santa Clara",
                        "state": "CA"
                    },
                    {
                        "cname": "Mountain View",
                        "state": "CA"
                    },
                    {
                        "cname": "San Francisco",
                        "state": "CA"
                    },
                    {
                        "cname": "Austin",
                        "state": "TX"
                    },
                    {
                        "cname": "Los Angeles",
                        "state": "CA"
                    },
                    {
                        "cname": "Boston",
                        "state": "MS"
                    },
                    {
                        "cname": "Detroit",
                        "state": "MI"
                    },
                    {
                        "cname": "Seattle",
                        "state": "WA"
                    },
                    {
                        "cname": "Harrisburg",
                        "state": "PA"
                    },
                    {
                        "cname": "Salt Lake City",
                        "state": "UT"
                    },
                    {
                        "cname": "Dallas",
                        "state": "TX"
                    },
                    {
                        "cname": "San Jose",
                        "state": "CA"
                    },
                    {
                        "cname": "San Ramon",
                        "state": "CA"
                    },
                    {
                        "cname": "Arlington",
                        "state": "TX"
                    },
                    {
                        "cname": "Gillroy",
                        "state": "CA"
                    },
                    {
                        "cname": "Plano",
                        "state": "TX"
                    },
                    {
                        "cname": "Las Vegas",
                        "state": "NV"
                    },
                    {
                        "cname": "Chicago",
                        "state": "IL"
                    },
                    {
                        "cname": "Binghamton",
                        "state": "NY"
                    },
                    {
                        "cname": "Tampa",
                        "state": "FL"
                    },
                    {
                        "cname": "Santa Teresa",
                        "state": "CA"
                    },
                    {
                        "cname": "Pittsburg",
                        "state": "PA"
                    },
                    {
                        "cname": "Colorado",
                        "state": "DV"
                    }]

            };


            console.log(samplecitydata);

            $httpBackend.expectGET(baseURL).respond(200, samplecitydata);

            var temp = this;

            CityFactoryAPI.refreshCityStateService().then(function (result) {
                console.log(result);
                temp = result.data;
            });

            $httpBackend.flush();

            expect(temp).toEqual(samplecitydata);
        });
    });

    describe('function : addCityStateService', function () {
        // A sample test case for refreshing/ getting all entries

        it('should insert a new city record', function () {
            var response = CityFactoryAPI.addCityStateService(cityrecord);

            // var newrecord = {
            //     "cname": cityrecord.cname,
            //     "state": cityrecord.state
            // };

            $httpBackend.expect('POST', baseURL, cityrecord)
                .respond(201, cityrecord);

            //console.log(response.data);

            $httpBackend.flush();
        });
    });


});