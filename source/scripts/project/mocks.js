/* API Mocks

   Angular doc for reference: https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend

   Append --mocks=true to grunt or grunt watch to compile your project using mock data

*/

angular.module( "e2e-mocks", [ "ngMockE2E", "ngRoute" ] )

// Config block is for seed purposes only, should be removed in project (also remove "ngRoute" from line above)
.config( [ "$routeProvider",

    function ( $routeProvider )
    {
        "use strict";

        $routeProvider.when( "/mocks", { templateUrl: "/build/templates/mocks.html", controller: "Mocks" } );
    }

] )

.run( [ "$httpBackend", "APIRoot",

    function ( $httpBackend, APIRoot )
    {
        "use strict";

        // Fake Data, simple for demo purposes
        var demoRoute = APIRoot + "contacts";
        var contacts  = [
            { "name": "Jack Thomas" },
            { "name": "James Jones" },
            { "name": "Phillip Sanky" }
        ];
        var contact   = { "name": "Peter Malloy" };

        // Example: mock "GET", specify only data to be returned
        $httpBackend.when( "GET", demoRoute )

            .respond( contacts );

        // Example: mock "POST", specify response status code and data to be returned
        $httpBackend.when( "POST", demoRoute )

            .respond( function( method, url, data )
            {
                data = angular.fromJson( data );
                contacts.push( data.name ? data : contact );

                return [
                    201,
                    contacts[ contacts.length - 1 ],
                ];
            } );

        // Example: mock "DELETE", specify response status code, null data to be returned, and custom headers
        $httpBackend.when( "DELETE", new RegExp( demoRoute + '/*' ) )

            .respond( function( method, url )
            {
                var index = Number( url.substr( url.lastIndexOf( '/' ) + 1 ) );
                contacts.splice( index, 1 );
                return [
                    204,
                    null,
                    { someHeader: "value" }
                ];
            } );

        // Any content that still needs to be requested from an external source/HTTP request
        // needs to use passThrough(), including template files. Handlers are prioritized
        // by the order they are attached, meaning passThrough()s could be listed earlier.
        $httpBackend.when( "GET", /^\/build/ ).passThrough();

        // Fallback for all other routes, just in case. You 'may' need to list more than just the GET fallback.
        $httpBackend.when( "GET", /\*/ ).passThrough();
    }

] )

// Controller is for seed purposes only, should be removed in project
.controller( "Mocks", [ "API",

    function( API )
    {
        "use strict";

        var ctrl = this;
        ctrl.contacts = [];

        ctrl.getContacts = function ()
        {
            API.$get( "contacts" )

                .then( function( response )
                {
                    ctrl.contacts = response.data;
                },
                function ( err )
                {
                    console.log( err );
                } );
        };

        ctrl.addContact = function( name )
        {
            API.$post( "contacts", { "name": name } )

                .then( function( response )
                {
                    ctrl.nextContact = "";
                    ctrl.contacts.push( response.data );
                },
                function( err )
                {
                    console.log( err );
                } );
        };
        ctrl.deleteContact = function ( index )
        {
            API.$delete( "contacts/" + index )

                .then( function()
                {
                    ctrl.getContacts();
                },
                function( err )
                {
                    console.log( err );
                } );
        };

        ctrl.getContacts();
    }

] );

// Be sure to change this to the module name of your project
angular.module( "vokal" ).requires.push( "e2e-mocks" );
