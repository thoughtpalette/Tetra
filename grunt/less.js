module.exports = {
    build:
    {
        options: {
            rootpath: ""
        },
        files: {
            "build/project.css": [
                "source/components/css-reset/reset.css",
                "source/styles/project/main.less"
            ]
        }
    }
};
