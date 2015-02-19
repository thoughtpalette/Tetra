module.exports = function ( grunt )
{
    "use strict";

    grunt.registerTask( "taskExample", "Log some lines", function()
    {
        grunt.log.writeln( "Hello world!" );

        // arguments are colon separated on the task name, ex: `grunt taskExample:arg1:arg2:arg3...`
        if( arguments.length !== 0) { grunt.log.writeln( "Arguments: " + JSON.stringify( arguments ) ); }

        // flags are `--` flags with the task, ex: `grunt taskExample --flag --another-flag`
        if( grunt.option.flags().length > 0 )
        {
            grunt.log.writeln( "Flags: " + JSON.stringify( grunt.option.flags() ) );
        }

        // option values can be specified in flags, ex: `grunt taskExample --option1=value2`
        if( grunt.option( "option1" ) ) { grunt.log.writeln( "Option1: " + grunt.option( "option1" ) ); }// "value2"

        // configuration allows access to other grunt options, grunt.config( prop[, value] ) is a getter/setter
        // aliased to grunt.config.get( prop ) and grunt.config.set( prop, value )
        grunt.log.writeln( grunt.config( "pkg.name" ) );
        grunt.log.writeln( JSON.stringify( grunt.config( "less.dev.files" ) ) );
    } );

};
