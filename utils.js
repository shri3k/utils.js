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