'use strict';

describe('Service :  ResourceBuilderProvider', function () {
  var provider;
  var cacheService = function () {
  };

  beforeEach(function () {
    angular.mock.module('mi.ResourceBuilder');
    angular.mock.module(function (ResourceBuilderProvider, $provide) {
      provider = ResourceBuilderProvider;
      $provide.service('cacheService', cacheService)
    });
  });

  it('create a resource', angular.mock.inject(function ($injector) {
    provider.addResource('Dummy', {url: 'uri'});

    expect($injector.has('Dummy')).toBeTruthy();
    expect($injector.get('Dummy').name).toBe('Resource');
  }));

  it('create a resource and injecting cache', angular.mock.inject(function ($injector) {
    var config = {
      url: 'uri',
      actions: {
        'cacheList': {
          cache: {
            type: 'inject',
            service: 'cacheService'
          }
        }
      }
    }

    provider.addResource('DummyWithCache', config);

    expect($injector.has('DummyWithCache')).toBeTruthy();
    expect($injector.get('DummyWithCache').name).toBe('Resource');
    expect($injector.get('DummyWithCache').prototype['$cacheList']).toBeDefined();
  }));

  it('create multiple resources', angular.mock.inject(function ($injector) {

    var config = {
      'Dummy': {
        url: 'uri'
      },
      'Other': {
        url: 'test'
      }
    };

    provider.addResources(config);

    expect($injector.has('Dummy')).toBeTruthy();
    expect($injector.has('Other')).toBeTruthy();
    expect($injector.get('Dummy').name).toBe('Resource');
    expect($injector.get('Other').name).toBe('Resource');
  }));

  it('create multiple resources', angular.mock.inject(function ($injector) {

    expect(function () {
      $injector.get('ResourceBuilder')
    }).toThrowError('ResourceBuilderProvider is no useable service.');
  }));

});