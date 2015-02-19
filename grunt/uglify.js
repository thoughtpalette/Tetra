module.exports = {
    options:
    {
        mangle: true,
        compress: true,
        banner: "/*! <%= pkg.name %> <%= grunt.template.today( 'yyyy-mm-dd' ) %> */",
        sourceMap: false
    },
    project:
    {
        files:
        {
            "build/project.js": "build/project.js"
        }
    },
    components:
    {
        options:
        {
            mangle: false,
            banner: "",
        },
        files:
        {
            "build/components.js": "build/components.js"
        }
    }
};
