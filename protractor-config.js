exports.config = {

    // Protractor defaults to using the local .jar file if no seleniumAddress is given
    // Leave seleniumServerJar commented out to default to the correct version url
    // seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone",

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        "browserName": "firefox" // or chrome or phantomjs
    },

    // Prevents a full selenium start-up, much quicker, but only works with Chrome and Firefox
    directConnect: true,
    baseUrl: 'http://localhost:3000',
    rootElement: 'html',

    // Spec patterns are relative to the current working directly when protractor is called.
    specs: [
        "tests/*.js",
        "!tests/*.spec.js"
    ],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    },

    onPrepare: function ()
    {
        require( "jasmine-reporters" );
        jasmine.getEnv().addReporter( new jasmine.JUnitXmlReporter( "coverage/net", true, true ) );
    }
};
