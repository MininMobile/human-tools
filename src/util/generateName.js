const names = require("./../data/names.json")
const random = require("./random")

/**
 * generate a first and last name
 * @param {"male"|"female"|"unisex"} sex gender of name
 * @returns {object} `{"first": "firstname", "last": "lastname"}`
 */
function generateName(sex = "male") {
	let first = names[sex][random(0, names[sex].length)];
	let last = names.last[random(0, names.last.length)];

	return { "first": first, "last": last }
}

module.exports = generateName;
