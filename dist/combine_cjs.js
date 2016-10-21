"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var class2type = {};

var toString = class2type.toString;

var getProto = Object.getPrototypeOf;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(Object);

var isPlainObject = function isPlainObject(obj) {
	var proto, Ctor;

	// Detect obvious negatives
	// Use toString instead of jQuery.type to catch host objects
	if (!obj || toString.call(obj) !== "[object Object]") {
		return false;
	}

	proto = getProto(obj);

	// Objects with no prototype (e.g., `Object.create( null )`) are plain
	if (!proto) {
		return true;
	}

	// Objects with prototype are plain iff they were constructed by a global Object function
	Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
	return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
};

var isArray = Array.isArray;

var type = function type(obj) {
	if (obj == null) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

var isFunction = function isFunction(obj) {
	return type(obj) === "function";
};

var extend = function extend() {
	var options,
	    name,
	    src,
	    copy,
	    copyIsArray,
	    clone,
	    target = arguments[0] || {},
	    i = 1,
	    length = arguments.length,
	    deep = false;

	// Handle a deep copy situation
	if (typeof target === "boolean") {
		deep = target;

		// Skip the boolean and the target
		target = arguments[i] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !isFunction(target)) {
		target = {};
	}

	for (; i < length; i++) {

		// Only deal with non-null/undefined values
		if ((options = arguments[i]) != null) {

			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target === copy) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if (deep && copy && isPlainObject(copy)) {

					clone = src && isPlainObject(src) ? src : {};

					// Never move original objects, clone them
					target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
				} else if (copy !== undefined) {
					target[name] = copy;
				} else {
					delete target[name];
				}
			}
		}
	}

	// Return the modified object
	return target;
};

exports.default = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return extend.apply(undefined, [true, {}].concat(args));
};
