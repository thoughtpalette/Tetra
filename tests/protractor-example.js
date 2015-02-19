"use strict";

describe( "The page", function ()
{
    it( "should do something", function ()
    {
        browser.get( "/" );

        expect( element( by.css( "header" ) ).isPresent() ).toBe( true );
    } );

} );
