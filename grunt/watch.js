module.exports = {
    options:
    {
        atBegin: true
    },
    jshint:
    {
        files: "<%= jshint.all.src %>",
        tasks: [ "jshint" ]
    },
    scripts:
    {
        files: [
            "source/scripts/project/*"
        ],
        tasks: [ "concat:scripts", "replace" ]
    },
    styles:
    {
        files: [
            "source/styles/project/*"
        ],
        tasks: [ "less" ]
    },
    templates:
    {
        files: [
            "source/templates/**/*.html"
        ],
        tasks: [ "ngtemplates", "replace" ]
    }
};