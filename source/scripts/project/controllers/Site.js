/* Site controller */

angular.module( "vokal.controllers" )

.controller( "Site", [ "$scope", "$rootScope", "$location", "LoginPath", "RouteAuth",

    function ( $scope, $rootScope, $location, LoginPath, RouteAuth )
    {
        "use strict";

        // Redirect to login route on unauthorized API requests
        $rootScope.$on( "APIRequestUnauthorized", function ()
        {
            if( $location.path() !== LoginPath )
            {
                RouteAuth.storeRoles( [] );
                $location.path( LoginPath );
                return;
            }
        } );

    }

] );
