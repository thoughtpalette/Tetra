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
    "vokal.API",
    "vokal.RouteAuth"
] )

.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",
        "APIProvider", "APIRoot", "LoginPath", "RouteAuthProvider",

    function ( $routeProvider, $locationProvider, $sceDelegateProvider,
        APIProvider, APIRoot, LoginPath, RouteAuthProvider )
    {
        "use strict";

        $routeProvider.when( "/", {
            templateUrl: "/build/templates/partials/home.html",
            controller: "Home",
            controllerAs: "home"
        } );
        $routeProvider.otherwise( {
            redirectTo: "/"
        } );

        $locationProvider.html5Mode( true ).hashPrefix( "!" );

        $sceDelegateProvider.resourceUrlWhitelist(
            [ "self" ]
        );

        APIProvider.setRootPath( APIRoot );
        RouteAuthProvider.setRedirectPath( LoginPath );

    }

] )

.constant( "APIRoot",   "{{ APIROOT }}" )
.constant( "LoginPath", "/path/to/login/" );

angular.module( "vokal.controllers", [] );
angular.module( "vokal.services", [] );
angular.module( "vokal.directives", [] );
angular.module( "vokal.filters", [] );
