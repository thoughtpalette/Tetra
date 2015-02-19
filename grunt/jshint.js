module.exports = {
    // See http://jshint.com/docs/options/ for all options
    // Options set to `false` are the jshintrc defaults
    all:
    {
        options: {
            force: true,
            jshintrc: ".jshintrc",
        },
        src:
        [
            "source/scripts/project/**.js",
            "grunt/**.js"
        ]

    }
};