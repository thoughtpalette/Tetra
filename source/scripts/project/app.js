/* App Configuration */

angular.module( "vokal", [
    "ngRoute",
    "ngTouch",
    "ngSanitize",
    "ngMessages",
    "ngAnimate",
    "vokal.controllers",
    "vokal.services",
    "vokal.directives",
    "vokal.filters",
    "vokal.RouteAuth",
    "ui.bootstrap"
] )

.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider", "APIRoot", "LoginPath", "RouteAuthProvider",

    function ( $routeProvider, $locationProvider, $sceDelegateProvider, APIRoot, LoginPath, RouteAuthProvider )
    {
        "use strict";

        $routeProvider.when( "/", {
            templateUrl: "/build/templates/partials/home.html",
            controller: "Home"
        } );
        $routeProvider.otherwise( {
            redirectTo: "/"
        } );

        $locationProvider.html5Mode( true ).hashPrefix( "!" );

        $sceDelegateProvider.resourceUrlWhitelist(
            [ "self" ]
        );

        RouteAuthProvider.setRedirectPath( LoginPath );

    }

] )

.constant( "APIRoot",   "{{ APIROOT }}" )
.constant( "LoginPath", "/path/to/login/" );

angular.module( "vokal.controllers", [] );
angular.module( "vokal.services", [] );
angular.module( "vokal.directives", [] );
angular.module( "vokal.filters", [] );
