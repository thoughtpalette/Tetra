module.exports = {
templates:
    {
        expand: true,
        cwd: "source/",
        src: [
            "templates/partials/**/*.html",
            "templates/views/**/*.html"
        ],
        dest: "build/"
    },
    fonts:
    {
        expand: true,
        cwd: "source/fonts/fontawesome/fonts/",
        src: [
            "**/*.*"
        ],
        dest: "build/fonts/"
    },
    version:
    {
        expand: true,
        cwd: "source/scripts/project/",
        src: [
            "version.json"
        ],
        dest: "build/"
    },
    favicon:
    {
        expand: true,
        cwd: "source/favicon/",
        src: [
            "**/*.*"
        ],
        dest: "build/favicon/"
    },
    manifest:
    {
        expand: true,
        cwd: "source/",
        src: [
            "manifest.json"
        ],
        dest: "build/"
    },
    sounds:
    {
        expand: true,
        cwd: "source/sounds/",
        src: [
            "**/*.*"
        ],
        dest: "build/sounds/"
    },
    images:
    {
        expand: true,
        cwd: "source/images/",
        src: [
            "**/*.*"
        ],
        dest: "build/images/"
    }
};