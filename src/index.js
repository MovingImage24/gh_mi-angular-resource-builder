'use strict';

module.exports = angular
  .module('mi.ResourceBuilder', ['ngResource'])
  .provider('ResourceBuilder', require('./ResourceBuilderProvider'))
;
