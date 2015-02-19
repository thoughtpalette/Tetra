/* Home controller */

angular.module( "vokal.controllers" )

.controller( "Home", [ "API",

    function ( API )
    {
        "use strict";
        var ctrl = this;

        ctrl.world = "World";

        API.$post( "tests/example.json", { camelData: "should post as camel_data" } )

            .then( function ( response )
            {
                console.dir( response.data );
            } );

        API.$get( "tests/example.json" )

            .then( function ( response )
            {
                console.dir( response.data );
            } );

    }

] );
