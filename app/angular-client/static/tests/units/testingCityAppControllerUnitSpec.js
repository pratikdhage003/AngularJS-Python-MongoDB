/**
 * Created by pratikdhage on 12/16/17.
 */


//Jasmine test caes for controller
describe('AngularJS Test Suites', function () {

     //mention the name of the app here inside module inside beforeEach

    beforeEach(module('CityApp'));

    describe('Now, testing AngularJS Controller', function () {

        //initialize empty scope object
        var scope ;
        var ctrl;

        // injects angular components into the test
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('CityAppController', {$scope: scope});
        }));


        afterEach(function () {
            //should contain clean-up code
        });

        //defines a single unit test
        it('should initialize ......', function () {

            // test passes if expectations are met, if anything inside it block fails then test fails
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("this is just a starting !");
        });
    });
});