'use strict';

module.exports = function (karma) {
  karma.set({

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-resource/angular-resource.js',
      'src/index.js',
      'test/**/*Spec.js'
    ],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' }
      ]
    },
    preprocessors: {
      'test/**/*Spec.js': ['webpack'],
      'src/index.js': ['webpack']
    },

    browsers: ['PhantomJS'],

    logLevel: karma.LOG_DEBUG,

    singleRun: false,

    webpack: {
      module: {
        postLoaders: [{ // << add subject as webpack's postloader
          test: /\.js$/,
          exclude: /(test|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    }
  });
};