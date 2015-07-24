// Protractor config file

exports.config = {

    // The address of a running selenium server.
    seleniumAddress: "http://localhost:4444/wd/hub",

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        "browserName": "chrome"
    },
    directConnect: true,
    baseUrl: "http://localhost:1338",

    // Spec patterns are relative to the current working directly when protractor is called.
    specs: [ "tests/*.js" ],

    onPrepare: function () {
        require( "jasmine-reporters" );
        jasmine.getEnv().addReporter( new jasmine.JUnitXmlReporter( "coverage/net", true, true ) );
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    }

};
