module.exports = function ( grunt )
{
    "use strict";

    grunt.registerTask( "envProd", "Set environment variables for production", function()
    {
        grunt.config( "APIRoot", "/path/to/prod/api/" );

    } );
};
