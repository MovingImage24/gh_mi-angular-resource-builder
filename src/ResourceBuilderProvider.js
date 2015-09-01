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
    $provide.factory(name, function($resource) {
      return $resource(resourceConfig.url, resourceConfig.params, resourceConfig.actions, resourceConfig.options);
    });
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