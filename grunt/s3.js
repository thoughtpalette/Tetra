module.exports = {
    options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "<%= aws.s3Bucket %>"
    },
    build: {
        cwd: "<%= pkg.buildPath %>/",
        src: "**",
        dest: "<%= pkg.buildPath %>/"
    }
};