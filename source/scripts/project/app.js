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
    "ui.bootstrap"
] )

.config( [ "$routeProvider", "$locationProvider", "$sceDelegateProvider",

    function ( $routeProvider, $locationProvider, $sceDelegateProvider )
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
    }

] )

angular.module( "vokal.controllers", [] );
angular.module( "vokal.services", [] );
angular.module( "vokal.directives", [] );
angular.module( "vokal.filters", [] );
