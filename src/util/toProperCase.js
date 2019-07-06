/**
 * capitalizes first letter of a word
 * @param {string} text word
 * @returns {string} word
 */
function toProperCase(text) {
	return text.substring(0, 1).toUpperCase() + text.substring(1);
}

module.exports = toProperCase;
