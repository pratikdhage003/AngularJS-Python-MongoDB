// Karma configuration
// Generated on Fri Dec 15 2017 23:43:48 GMT-0800 (PST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],

        // list of files / patterns to load in the browser
        files: [
            '../bower_components/angular/angular.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            '../js/controllers/CityAppController.js',
            '../js/services/CityService.js',
            'units/controllers/*.js',
            'units/services/*.js',
        ],


        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '../js/controllers/*.js': 'coverage',
            '../js/services/*.js': 'coverage'
        },

        coverageReporter: {
            dir: 'coverage-js',
            reporters: [
                {type: 'html', subdir: 'default'},
                {type: 'text'}
            ]
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
