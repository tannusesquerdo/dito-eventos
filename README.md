# Sqone

[![Build Status](https://travis-ci.org/alistairtweedie/sqone.svg?branch=master)](https://travis-ci.org/alistairtweedie/sqone)
[![devDependency Status](https://david-dm.org/alistairtweedie/sqone/dev-status.svg)](https://david-dm.org/alistairtweedie/sqone#info=devDependencies)


Gulp boilerplate for static web pages

## Install

###1. Install node packages

	$ npm install

###2. Install bower packages

	$ bower install

###3. Build

Builds the project from the src folder.

	$ gulp build

###4. Start server

Serves the project in the browser and watches for files changes while in active development. Refreshes the browser on file save.

	$ gulp serve

###5. Test 

Run tests on the project - page speed, accessibility, stylestats.

    $ gulp test

###6. Build for production

Use when ready to push production ready code live - minifys and optimises the project.

    $ gulp build --prod
