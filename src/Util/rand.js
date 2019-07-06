/**
 * Generate a random number
 * @param {number} min Minimum amount that can be returned
 * @param {number} max Maximum amount that can be returned
 * @returns {number} Number between `min` and `max`
 */
function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = rand;