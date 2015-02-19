module.exports = function ( grunt )
{
    "use strict";

    require( "load-grunt-config" )( grunt, {
        data: {
            version: grunt.option( "gitver" ) || Date.now(),
            APIRoot: grunt.config( "APIRoot" ),
            aws: {
                accessKeyId: grunt.option( "aws-access-key-id" ),
                secretAccessKey: grunt.option( "aws-secret-access-key" ),
                s3Bucket: grunt.option( "aws-s3-bucket" ),
                cloudfrontDistributionId: grunt.option( "aws-cloudfront-distribution-id" )
            }
        }
    } );
};
