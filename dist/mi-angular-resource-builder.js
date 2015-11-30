/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @ngInject
	 */
	
	module.exports = angular
	  .module('mi.ResourceBuilder', ['ngResource'])
	  .provider('ResourceBuilder', __webpack_require__(1))
	;


/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjNiZTI0NTg3OGUyYmZjNzU4MTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUJ1aWxkZXJQcm92aWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBDIiwiZmlsZSI6Im1pLWFuZ3VsYXItcmVzb3VyY2UtYnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjNiZTI0NTg3OGUyYmZjNzU4MTlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyXG4gIC5tb2R1bGUoJ21pLlJlc291cmNlQnVpbGRlcicsIFsnbmdSZXNvdXJjZSddKVxuICAucHJvdmlkZXIoJ1Jlc291cmNlQnVpbGRlcicsIHJlcXVpcmUoJy4vUmVzb3VyY2VCdWlsZGVyUHJvdmlkZXInKSlcbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQG5nSW5qZWN0XG4gKi9cbmZ1bmN0aW9uIFJlc291cmNlQnVpbGRlclByb3ZpZGVyKCRwcm92aWRlKSB7XG4gIHJldHVybiB7XG4gICAgYWRkUmVzb3VyY2U6IGFkZFJlc291cmNlLFxuICAgIGFkZFJlc291cmNlczogYWRkUmVzb3VyY2VzLFxuICAgICRnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVzb3VyY2VCdWlsZGVyUHJvdmlkZXIgaXMgbm8gdXNlYWJsZSBzZXJ2aWNlLicpXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGFkZFJlc291cmNlKG5hbWUsIHJlc291cmNlQ29uZmlnKSB7XG4gICAgJHByb3ZpZGUuZmFjdG9yeShuYW1lLCBbJyRyZXNvdXJjZScsICckaW5qZWN0b3InLCBmdW5jdGlvbigkcmVzb3VyY2UsICRpbmplY3Rvcikge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc291cmNlQ29uZmlnLmFjdGlvbnMsIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICBjaGVja0NhY2hlQ29uZmlnKGFjdGlvbiwgJGluamVjdG9yKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gJHJlc291cmNlKHJlc291cmNlQ29uZmlnLnVybCwgcmVzb3VyY2VDb25maWcucGFyYW1zLCByZXNvdXJjZUNvbmZpZy5hY3Rpb25zLCByZXNvdXJjZUNvbmZpZy5vcHRpb25zKTtcbiAgICB9XSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NhY2hlQ29uZmlnKGFjdGlvbkNvbmZpZywgJGluamVjdG9yKSB7XG4gICAgaWYgKGFjdGlvbkNvbmZpZy5jYWNoZSAmJiBhY3Rpb25Db25maWcuY2FjaGUudHlwZSA9PT0gJ2luamVjdCcpIHtcbiAgICAgIGFjdGlvbkNvbmZpZy5jYWNoZSA9ICRpbmplY3Rvci5nZXQoYWN0aW9uQ29uZmlnLmNhY2hlLnNlcnZpY2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFJlc291cmNlcyhyZXNvdXJjZUNvbmZpZ3MpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHJlc291cmNlQ29uZmlncykge1xuICAgICAgaWYgKHJlc291cmNlQ29uZmlncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBhZGRSZXNvdXJjZShuYW1lLCByZXNvdXJjZUNvbmZpZ3NbbmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb3VyY2VCdWlsZGVyUHJvdmlkZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9SZXNvdXJjZUJ1aWxkZXJQcm92aWRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=