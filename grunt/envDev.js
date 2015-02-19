module.exports = function ( grunt )
{
    "use strict";

    grunt.registerTask( "envDev", "Set environment variables for development", function()
    {
        grunt.config( "APIRoot", "/path/to/dev/api/" );

    } );
};
