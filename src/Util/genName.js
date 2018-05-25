const names = require("./../Data/names.json")

function genName(sex = "male") {
	function rand(min, max) { return Math.floor(Math.random() * max) + min; }
	
	let first = names[sex][rand(0, names[sex].length)];
	let last = names.last[rand(0, names.last.length)];

	return {"first":first, "last":last};
}

module.exports = genName;