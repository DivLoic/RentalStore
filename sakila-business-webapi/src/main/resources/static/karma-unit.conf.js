module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'js/app.js',
      'js/service/**.js',
      'js/controller/**.js',
      'test/**.js'
    ],
    frameworks: ['jasmine'],
    autoWatch: true,
    browsers: ['PhantomJS']
  });
};
