/**
* Utility to get the values of keys in an array of objects.
*
* @method getObjKey
* @param arr {Array} Array of Objects
* @param key {String} key to be filtered
* @return {Array}
*/
function getObjKey(arr, key) {
return arr.map(function(item) {
return item[key];
});
}

/**
* Utility function to grab the console in the dev tools and puts it in window.log
* variable
*
* @method grabber
* @param tag {Regex} Any regular expression
*/
;(function(grabber) {
	'use strict';
	debugger;
	var old = console.log;
	var log = function(tag, pocket) {
		var tag = tag,
			logger = pocket || "logger",
			grabber[logger] = grabber[logger] || [];
		console.log = function() {
			if (arguments[0].match(tag, "i")) {
				Array.prototype.shift.call(arguments);
				Array.prototype.forEach.call(arguments, function(arg) {
					grabber[logger].push(arg);
				});
				old.apply(this, arguments);
			} else {
				old.apply(this, arguments);
			}
		};
	};

	grabber.log = log;
}(window.grabber = window.grabber || {}));