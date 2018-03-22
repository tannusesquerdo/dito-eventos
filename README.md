# Sqone

Build ⚡ lightening fast static sites

[![Build Status](https://travis-ci.org/alistairtweedie/sqone.svg?branch=master)](https://travis-ci.org/alistairtweedie/sqone)
[![devDependency Status](https://david-dm.org/alistairtweedie/sqone/dev-status.svg)](https://david-dm.org/alistairtweedie/sqone#info=devDependencies)

## Install

### 1. Install node packages

	$ npm install

### 2. Install bower packages

	$ bower install

## Usage

### 1. Build

Builds the project from the `src` folder.

	$ gulp build

### 2. Start server

Serves the project in the browser on `localhost:3000` and watches for files changes in the `src` folder while in active development. Refreshes the browser on file save.

	$ gulp serve

### 3. Test

Run tests on the project - page speed, accessibility, stylestats. These are output in a `reports` folder

    $ gulp test

### 4. Build for production

Use when ready to deploy to production - minifys files, runs uncss, extracts critical css and generates a sitemap based on files in the `src/templates/pages` folder.

    $ gulp build --production

### 5. Deploy

You can deploy your production ready code to your server by inserting your server details in `site.json`

    $ gulp deploy --production
