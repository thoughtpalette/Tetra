module.exports = function ( grunt )
{
    "use strict";

    return {
        scripts:
        {
            src: [
                "source/scripts/project/app.js",
                "source/scripts/project/**/*.js"
            ],
            filter: function ( filepath )
            {
                return !/mocks.js/.test( filepath ) || grunt.option( "mocks" );
            },
            dest: "build/project.js"
        },
        jquery:
        {
            src: [
                "source/components/jquery/dist/jquery.js",
            ],
            dest: "build/jquery.js"
        },
        jqueryMin:
        {
            src: [
                "source/components/jquery/dist/jquery.min.js",
                "source/components/jquery-cookie/jquery.cookie.js"
            ],
            dest: "build/jquery.js"
        },
        angular:
        {
            src: [
                "source/components/angular/angular.js",
                "source/components/angular-route/angular-route.js",
                "source/components/angular-touch/angular-touch.js",
                "source/components/angular-sanitize/angular-sanitize.js",
                "source/components/angular-messages/angular-messages.js",
                "source/components/angular-animate/angular-animate.js",
                "source/components/angular-mocks/angular-mocks.js"
            ],
            dest: "build/angular.js"
        },
        angularMin:
        {
            src: [
                "source/components/angular/angular.min.js",
                "source/components/angular-route/angular-route.min.js",
                "source/components/angular-touch/angular-touch.min.js",
                "source/components/angular-sanitize/angular-sanitize.min.js",
                "source/components/angular-messages/angular-messages.min.js",
                "source/components/angular-animate/angular-animate.min.js",
                "source/components/angular-mocks/angular-mocks.js"
            ],
            dest: "build/angular.js"
        },
        components:
        {
            src: [
                "source/components/humps/humps.js",
                "source/components/vokal-ng-api/dist/vokal-ng-api.min.js",
                "source/components/vokal-ng-lib/services/route_auth.js",
                "source/components/angular-local-storage/dist/angular-local-storage.min.js",
                "source/components/html5shiv/dist/html5shiv.min.js",
                "source/components/fabric/dist/fabric.min.js"
            ],
            dest: "build/components.js"
        }
    };

};
