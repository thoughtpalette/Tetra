module.exports = {
    options: {
        keepAlive: false,
        noColor: false,
        coverageDir: "coverage/protractor",
        args: {
            baseUrl: "http://localhost:1338"
        }
    },
    targets: {
        options: {
            configFile: "protractor-config.js"
        }
    }
};