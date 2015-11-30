'use strict';

/**
 * @ngInject
 */
function ResourceBuilderProvider($provide) {
  return {
    addResource: addResource,
    addResources: addResources,
    $get: function () {
      throw new Error('ResourceBuilderProvider is no useable service.')
    }
  };

  function addResource(name, resourceConfig) {
    $provide.factory(name, ['$resource', '$injector', function($resource, $injector) {
      angular.forEach(resourceConfig.actions, function(action) {
        checkCacheConfig(action, $injector);
      });

      return $resource(resourceConfig.url, resourceConfig.params, resourceConfig.actions, resourceConfig.options);
    }]);
  }

  function checkCacheConfig(actionConfig, $injector) {
    if (actionConfig.cache && actionConfig.cache.type === 'inject') {
      actionConfig.cache = $injector.get(actionConfig.cache.service);
    }
  }

  function addResources(resourceConfigs) {
    for (var name in resourceConfigs) {
      if (resourceConfigs.hasOwnProperty(name)) {
        addResource(name, resourceConfigs[name]);
      }
    }
  }

}

module.exports = ResourceBuilderProvider;