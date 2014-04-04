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
function grabber(tag) {
	var tag = tag;
	var old = console.log;
	window.log = [];
	(function() {
		console.log = function() {
			if (arguments[0].match(tag, "i")) {
				Array.prototype.shift.call(arguments);
				Array.prototype.forEach.call(arguments, function(arg) {
					window.log.push(arg);
				});
				old.apply(this, arguments);
			} else {
				old.apply(this, arguments);
			}
		}
	}());
}