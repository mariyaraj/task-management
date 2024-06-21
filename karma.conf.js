module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'], // Ensure 'jasmine' is spelled correctly
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    // additional config settings
  });
};
