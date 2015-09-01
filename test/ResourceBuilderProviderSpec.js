'use strict';

describe('Service :  ResourceBuilderProvider', function () {
  var provider;
  beforeEach(function () {
    angular.mock.module('mi.ResourceBuilder');
    angular.mock.module(function (ResourceBuilderProvider) {
      provider = ResourceBuilderProvider;

    });
  });

  it('create a resource', angular.mock.inject(function ($injector) {
    provider.addResource('Dummy', {url: 'uri'});

    expect($injector.has('Dummy')).toBeTruthy();
    expect($injector.get('Dummy').name).toBe('Resource');
  }));

  it('create multiple resources', angular.mock.inject(function ($injector) {

    var config = {
      'Dummy' : {
        url: 'uri'
      },
      'Other' : {
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

    expect(function() {$injector.get('ResourceBuilder')}).toThrowError('ResourceBuilderProvider is no useable service.');
  }));

});