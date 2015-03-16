ng-gulp
============

#Introduction

This is a project started as a scrachpad applicaiton to start wetting my hands on Angular JS and with my intrest growing day by day on this I felt like there is more to do and started deploying my application in the Cloud platform for me to playaround.

The running version can be found at, [http://demo-venkatvp.rhcloud.com](http://demo-venkatvp.rhcloud.com)

##Demos

1. TODO: This is a sampe application to mke use of browser's `localstorage` and maintain some persistant data.
2. Temperature Conversion Utility: This is a module dedicated to demo RESTful service Angular JS fusion.
3. Customer : This is a module that makes use of RESTFul webservice and demonstrate the CRUD opration using RESTful services.

Please feel free to fork and suggest improvements.

## Onetime Setup
If you dont have `gulp` and `bower` installed globally before please do this.

```bash
npm install -g gulp bower 
```

This is required to be done if the `package.json` is updated antime.

```bash
npm install
```


## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3000` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches all files for changes and lints, builds and injects them into the index.html accordingly.

## Tests

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

