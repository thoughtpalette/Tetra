module.exports = {
    src: "coverage/**/*.json",
    options: {
        type: [ "lcov", "html" ],
        dir: "coverage/net",
        print: "detail"
    }
};