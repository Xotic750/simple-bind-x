/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2019-present",
  "date": "2019-08-16T18:37:48.004Z",
  "describe": "",
  "description": "Creates a new function with a bound sequence of arguments. Compliant to 8 arguments.",
  "file": "simple-bind-x.js",
  "hash": "720d232c18b40c25f7c8",
  "license": "MIT",
  "version": "1.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["simpleBindX"] = factory();
	else
		root["simpleBindX"] = factory();
})((function () {
  'use strict';

  var ObjectCtr = {}.constructor;
  var objectPrototype = ObjectCtr.prototype;
  var defineProperty = ObjectCtr.defineProperty;
  var $globalThis;
  var getGlobalFallback = function() {
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    return void 0;
  };

  var returnThis = function() {
    return this;
  };

  try {
    if (defineProperty) {
      defineProperty(objectPrototype, '$$globalThis$$', {
        get: returnThis,
        configurable: true
      });
    } else {
      objectPrototype.__defineGetter__('$$globalThis$$', returnThis);
    }

    $globalThis = typeof $$globalThis$$ === 'undefined' ? getGlobalFallback() : $$globalThis$$;

    delete objectPrototype.$$globalThis$$;

    return $globalThis;
  } catch (error) {
    return getGlobalFallback();
  }
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/util-pusher-x/dist/util-pusher-x.esm.js
// eslint-disable jsdoc/no-undefined-types
// noinspection JSCommentMatchesSignature

/**
 * This pushes or concatenates into a new or existing array.
 *
 * @param {Array} arrayLike - The source.
 * @param {number} [from=0] - The from source index.
 * @param {Array} [target=[]] - The target array.
 * @returns {*} The target array.
 */
// eslint-enable jsdoc/no-undefined-types
var pusher = function pusher(arrayLike, from) {
  var len = arrayLike.length;
  /* eslint-disable-next-line prefer-rest-params */

  var target = arguments.length > 2 ? arguments[2] : [];

  for (var i = from || 0; i < len; i += 1) {
    target[target.length] = arrayLike[i];
  }

  return target;
};

/* harmony default export */ var util_pusher_x_esm = (pusher);


// CONCATENATED MODULE: ./dist/simple-bind-x.esm.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ERROR_MESSAGE = 'bind called on incompatible ';
var object = {};
var ObjectCtr = object.constructor;
var toStringTag = object.toString;
var funcType = '[object Function]';
var ZERO = 0;
var argsOffset = 2;

var getMax = function getMax(a, b) {
  return a >= b ? a : b;
};

var assertIsFunction = function assertIsFunction(value) {
  if (typeof value !== 'function' && toStringTag.apply(value) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + value);
  }
};

var boundFns = [function zero(binder) {
  return function boundFn() {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments));
  };
}, function one(binder, boundLength) {
  return function boundFn(a) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a]));
  };
}, function two(binder, boundLength) {
  return function boundFn(a, b) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b]));
  };
}, function three(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c]));
  };
}, function four(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d]));
  };
}, function five(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e]));
  };
}, function six(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f]));
  };
}, function seven(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f, g) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f, g]));
  };
}, function eight(binder, boundLength) {
  /* eslint-disable-next-line max-params */
  return function boundFn(a, b, c, d, e, f, g, h) {
    /* eslint-disable-next-line babel/no-invalid-this,prefer-rest-params */
    return binder.apply(this, util_pusher_x_esm(arguments, boundLength, [a, b, c, d, e, f, g, h]));
  };
}];

var getBoundFn = function getBoundFn(args) {
  var _args = _slicedToArray(args, 3),
      binder = _args[0],
      target = _args[1],
      bindArgs = _args[2];

  var boundLength = getMax(ZERO, target.length - getMax(ZERO, bindArgs.length - argsOffset));
  var fn = boundFns[boundLength];
  var boundFn = fn ? fn(binder, boundLength) : boundFns[ZERO](binder);

  if (target.prototype) {
    /* eslint-disable-next-line lodash/prefer-noop */
    var Empty = function Empty() {};

    Empty.prototype = target.prototype;
    boundFn.prototype = new Empty();
    Empty.prototype = null;
  }

  return boundFn;
};

var getResult = function getResult(target, boundArgs) {
  /* eslint-disable-next-line babel/no-invalid-this */
  var result = target.apply(this, boundArgs);
  /* eslint-disable-next-line babel/no-invalid-this,babel/new-cap */

  return ObjectCtr(result) === result ? result : this;
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * The bind() method creates a new function that, when called, has its this
 * keyword set to the provided value, with a given sequence of arguments
 * preceding any provided when the new function is called.
 *
 * @param {Function} target - The target function.
 * @param {*} [thisArg] - The value to be passed as the this parameter to the target
 *  function when the bound function is called. The value is ignored if the
 *  bound function is constructed using the new operator.
 * @param {...*} [args] - Arguments to prepend to arguments provided to the bound
 *  function when invoking the target function.
 * @throws {TypeError} If target is not a function.
 * @returns {Function} The bound function.
 */
// eslint-enable jsdoc/check-param-names


var simple_bind_x_esm_bind = function bind(target, thisArg) {
  assertIsFunction(target);
  /* eslint-disable-next-line prefer-rest-params */

  var bindArgs = arguments;
  var bound;

  var binder = function binder() {
    /* eslint-disable-next-line prefer-rest-params */
    var boundArgs = util_pusher_x_esm(arguments, ZERO, util_pusher_x_esm(bindArgs, argsOffset));
    /* eslint-disable-next-line babel/no-invalid-this */

    return this instanceof bound ? getResult.apply(this, [target, boundArgs]) : target.apply(thisArg, boundArgs);
  };

  bound = getBoundFn([binder, target, bindArgs]);
  return bound;
};

/* harmony default export */ var simple_bind_x_esm = __webpack_exports__["default"] = (simple_bind_x_esm_bind);



/***/ })
/******/ ]);
});
//# sourceMappingURL=simple-bind-x.js.map