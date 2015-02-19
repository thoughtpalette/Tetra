module.exports = function ( config )
{
    "use strict";

    config.set( {

        basePath:   ".",
        frameworks: [ "jasmine" ],
        autoWatch:  false,
        browsers:   [ "Firefox" ],
        reporters:  [ "dots", "junit", "coverage" ],
        singleRun:  true,
        captureTimeout: 15000,
        logLevel: config.LOG_DEBUG,
        plugins: [
            "karma-jasmine",
            "karma-firefox-launcher",
            "karma-coverage",
            "karma-junit-reporter"
        ],
        preprocessors: {
            "build/project.js": [ "coverage" ]
        },
        junitReporter: {
            outputFile: 'coverage/net/karma-results.xml'
        },
        coverageReporter: {
            dir : "coverage/",
            reporters: [
                { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
            ]
        },
        files: [
            "source/components/angular/angular.js",
            "source/scripts/**/*.spec.js",
            "tests/**/*.spec.js"
        ]

    } );

};
