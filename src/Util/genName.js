const names = require("./../Data/names.json")
const rand = require("./rand")

function genName(sex = "male") {
	let first = names[sex][rand(0, names[sex].length)];
	let last = names.last[rand(0, names.last.length)];

	return {"first":first, "last":last};
}

module.exports = genName;