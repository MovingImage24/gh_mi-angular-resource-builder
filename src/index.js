'use strict';

/**
 * @ngInject
 */

module.exports = angular
  .module('mi.ResourceBuilder', ['ngResource'])
  .provider('ResourceBuilder', require('./ResourceBuilderProvider'))
;
