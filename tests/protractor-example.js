"use strict";

describe( "The page", function ()
{
    it( "Check canvas exists", function ()
    {
        browser.get( "/" );

        expect( element( by.id( "main" ) ).isPresent() ).toBe( true );
    } );

} );
