vokal-angular-seed
==================

[![codecov.io](https://codecov.io/github/vokal/vokal-angular-seed/coverage.svg?branch=master)](https://codecov.io/github/vokal/vokal-angular-seed?branch=master)


VOKAL Angular Seed is a starting point for any AngularJS applications at VOKAL.  Just copy, paste, configure, and go.

Note: anything installed on your local machine in these instructions using the `-g` flag will be installed globally, which means you won't have to re-install it if you spin up a second instance of a project using VOKAL Angular Seed in the future.

Local Development
-------

First, make sure you have installed [Node.js](http://nodejs.org/) which should automatically install npm.

With your console at the root of your project (same directory as package.json) run `npm start`. You should now be able to browse the site in your browser at [localhost:3000](http://localhost:3000). Behind the scenes `npm start` runs `npm install && bower install && grunt && node server` to install Node modules, install Bower components, run the default Grunt build, and then start a local Express server ([expressjs.com](http://expressjs.com/)). `start` is defined in the `package.json` `scripts` block and can be edited if needed.


Local Development with Vagrant (Deprecated)
-------

VOKAL Angular Seed is designed to run on its own [Node.js](http://nodejs.org/) server without having to run on top of a dedicated backend--your Angular project should consume an API accessible at a separate URL.  For local development, [Vagrant](http://www.vagrantup.com/) lets you run a local server without having to worry about any OS-specific issues often endemic to Windows implementations.  Vagrant utilizes a virtual Ubuntu machine, which means you'll need to have [VirtualBox](https://www.virtualbox.org/) installed on your system in order to use it.  (This process also uses [Docker](http://www.docker.com/), [Fig](http://orchardup.github.io/fig/), and [Express](http://expressjs.com/), but don't worry too much about those.)

If you have Node.js and VirtualBox installed and ready, install Vagrant by [downloading it from the website](http://www.vagrantup.com/downloads.html), and then navigate to the root directory of your project.  The following commands will load up your VM and development server, and can be run any time you need to bring things to life:

    vagrant up
    vagrant ssh
    cd /vagrant
    fig up

Once you fig up and the terminal stops doing new things (it'll likely hang at the end on something like `Attaching to vagrant_web_1`), leave your terminal up and running and go to `localhost:3000` in your browser.  If your `index` is being displayed, you're golden!  Be aware, though, that you can only have one Vagrant VM running at a time.  If you want to launch one for another project, first `ctrl-C` out of your terminal, type `exit` to exit the VM, and finally run `vagrant halt` to shut it down.  You should then be ready to spin it up again in the root directory of a different project.

If for any reason you need to start this whole process from scratch, you can run `vagrant destroy` to destroy the VM entirely, and it'll be re-downloaded and re-configured the next time you run `vagrant up`.

Bower
-----

VOKAL Angular Seed uses [Bower](http://bower.io/) for front-end package management.  You can install it globally with `npm install -g bower`, and install packages with `bower install [<name>=]<package>[#<version>] --save`.  All Bower components will be installed to `/source/components`, which is a git-ignored directory.  Your project files should only reference scripts and styles that are included in your `/build` directory, so configure your Grunt tasks (read more about Grunt below) to pull anything you need from `/source/components` into `/build`.  When deploying your project you'll need to ensure that your destination server runs `bower install` to install your dependent components, all of which should be defined in `bower.json`, before running your Grunt build steps.

The latest versions of AngularJS, which is required for the operation of VOKAL Angular Seed, is included in your `bower.json` file by default.

Run `bower update` at any time to check for new versions of installed components, which will download automatically.  Don't forget to compile your updated components using Grunt.

Bower's handling of authenticating private repos leaves something to be desired. The simplest way to deal with this is by referencing private Bower repos with https:// and then using a netrc file to pass a login and password to github on each request. Creating the netrc file on [Drone](https://github.com/drone) is handled in the `.drone.yml` file, but you can create a similar configuration on your local machine based on this [guide](https://confluence.atlassian.com/display/STASH/Permanently+authenticating+with+Git+repositories).

First, create a personal access oauth token at [github](https://github.com/settings/applications).

Next, use that token as your password in a new text document like so:

```
machine github.com
login my-github-username
password the-oauth-token
```

Windows 8: Save the above to a file named `_netrc` in your `%HOME%` directory (e.g. c:\users\john\_netrc).

Linux or OS X: Save the above to a file named `.netrc` in your home directory (e.g. ~/.netrc).


Grunt
-----

[Grunt](http://gruntjs.com/) is used to automate common project-related tasks.  If you don't already have it installed, do so globally using `npm install -g grunt-cli`.

All Grunt tasks reside in their own files in the `grunt` directory. The naming convention matches the associated task name. If any additional tasks need to be created, there is an additional `taskExample` that explains some of the customizations available in the task file. For plug-in tasks, use `concat` and `uglify` as examples (export a config object).

Grunt looks at your `package.json` file for project details.  Update the file to include your project name and include your Github repo where appropriate.  When you're ready, run `npm install` to download and install the project dependencies (which includes installing Grunt locally to your project), then run `grunt` to execute your default task, which should include compiling and outputting the default VOKAL Angular Seed components (make sure they were already installed with `bower install`).

Run `grunt watch` to start monitoring your codebase.  As you make updates in your `/source/*/project` directories they will be compiled automatically to `/build`, which is set as git-ignored to minimize needless commits and increase the readability of committed code.

When you deploy your repo to a testing or production server, be sure to run Grunt (and Bower) tasks on that server (make sure it has Grunt installed with the appropriate dependencies) to populate the `/build` directory.  Configure the `deploy` task in the aliases.yaml file in the `grunt` directory to include the particular tasks appropriate for your project (this is a good place to minify/uglify your files), and set `grunt deploy` to run automatically in your project root on the remote server whenever you push code.

Testing
-------

VOKAL Angular Seed includes [Protractor](https://github.com/angular/protractor) for E2E testing and Karma for unit testing. Protractor and [Karma](http://karma-runner.github.io) both depend on Selenium WebDriver. You will need to have some items globally installed on your system by running

```
npm install -g protractor
webdriver-manager
webdriver-manager update
webdriver-manager start
```

You'll need to keep a terminal open with webdriver running, then run `npm test` to run your tests.  Customize `protractor-config.js`, `karma-config.js` or other configs in the `grunt` directory if necessary, to point to the server and tests, but the defaults should usually work fine.

Store your Protractor test files in `/tests` and Karma test files adjacent to the `[subject].js` file with a name like `[subject].spec.js`.

Unit tests are more natural to cover code that has a direct input-output scenario where user behavior and UI is not relevent. Angular filters are a good example. E2E tests are more effective when checking overall system behaviors related to UI. The overall code coverage report will tell you what is covered, with a goal of 100% coverage by created E2E or unit tests as appropriate. If you are not sure what kind of test to write, ask a peer for their opinion.

Some further reading for testing syntax:

* [Getting started with Protractor](https://github.com/angular/protractor/blob/master/docs/getting-started.md)
* [Protractor API](https://github.com/angular/protractor/blob/master/docs/api.md)
* [WebDriverJS User's Guide](https://code.google.com/p/selenium/wiki/WebDriverJs)
* [Jasmine Syntax](http://jasmine.github.io/edge/introduction.html)

Because there are a lot of tasks and outputs from the test configuration, here is an overview when running both Protractor and Karma:

1. Grunt builds and fully cleans project
2. Karma runs tests
3. Karma reporter saves a [jUnit](http://junit.org/) test report and an [Istanbul](https://github.com/gotwarlost/istanbul) code coverage report
4. Grunt rebuilds (but doesn't clean the coverage folder) and then adds instrumentation required by Protractor
5. Protractor runs tests
6. Protractor reporter saves a jUnit test report and an Istanbul code coverage report
7. Grunt rebuilds (but doesn't clean the coverage folder)
8. Istanbul collects the Karma and Protractor coverage reports
9. Istanbul makes HTML and [Cobertura](http://cobertura.github.io/cobertura/) machine readable overall code coverage reports

AngularJS
---------

The structure proposed for [Angular](https://angularjs.org/) is based partially on [angular-seed](https://github.com/angular/angular-seed).  There are base directories for things like controllers and services, use them to hold your project files.  Organize your components thematically in smaller files as opposed to creating monolithic files that contain your entire application logic.  Grunt monitors the `project` directories, and will build everything together for you automatically.

Common Angular modules have been included in your `bowser.json` and `grunt/concat.js` files by default, with others available as need dictates.  Pick and choose whatever suits your use case, and re-run `grunt` to build with the modules you need.  Include VOKAL-made repos like [vokal-ng-api](https://github.com/vokal/vokal-ng-api) to expediate development.

Mocks
-----

Angular-Mocks is included in VOKAL Angular Seed to assist in development ahead of active API endpoints. Angular-Mocks will override all out going `http` requests and respond with the data specified in the matching mocks URL. Endpoints can be mocked inside the `mocks.js` file in the `scripts/project` directory and can be included in the build process using a handful of Grunt commands.

The Grunt magic for Angular-Mocks can be found in the `concat:scripts` task. To turn on Angular-Mocks while in development, use any of the following:

* `grunt --mocks // default runs all concat tasks`
* `grunt concat:scripts --mocks`
* `grunt watch --mocks`

The `--mocks` flag will carry over to the concat task. **IMPORTANT**: Mocks are not included in the deploy task. It utilizes `uglify` instead of `concat` and the `mocks.js` file is ignored.

jQuery
------

[jQuery](http://jquery.com/) and [jQuery Cookie](https://github.com/carhartl/jquery-cookie) are not included in seed by default, though you can bower install them by copying from the bower.json "available" object into dependencies, updating your grunt tasks, running bower install and then grunt building the site. If you bower install a dependency that requires jQuery, you will only need to update your grunt tasks.

CSS
---

[LESS](http://lesscss.org/) is leveraged for CSS.  Keep your files in `/source/styles/project`, name your primary file `main.less`, and include any others via `@import` in your primary file.  Feel free to use LESS syntax in your files (and give them all `.less` file extensions), but LESS is a superset of vanilla CSS, and you only need to use the LESS syntax if you feel it's appropriate.

A custom CSS reset has been included already in `main.less`.


Drone
-----

[Drone](https://github.com/drone/drone) is a Continuous Integration (CI) platform. There is a .drone.yml file included in the root directory that provides build and deployment instructions for [Vokal's Drone CI server](https://drone.vokal.io). When you are ready to deploy your site you will need to un-comment the deployment section of the .drone.yml file and ask a senior engineer for help activating the repo on Vokal's Drone Server.


Included:
---------

Libraries     | Version
:------------ | :------
AngularJS     | ~1.3.x
Angular-Mocks | ~1.2.25
HTML5 Shiv    | 3.7.1
css-reset     | github.com/vokal/css-reset
