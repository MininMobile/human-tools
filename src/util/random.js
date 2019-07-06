/**
 * generate a random number
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @returns {number} number between `min` and `max`
 */
function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = rand;
