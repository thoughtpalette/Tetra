"use strict";

var replacements = [
    {
        from: "{{ VERSION }}",
        to: "<%= version %>"
    },
    {
        from: "{{ APIROOT }}",
        to: "<%= APIRoot %>"
    }
];

module.exports = {
    js: {
        src: [ "build/*.css", "build/*.js", "build/**/*.html" ],
        overwrite: true,
        replacements: replacements
    },
    templates: {
        src: [ "source/templates/*.html" ],
        dest: "build/",
        overwrite: false,
        replacements: replacements
    }
};
