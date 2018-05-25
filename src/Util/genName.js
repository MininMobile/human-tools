const names = require("./../Data/names.json")

function genName() {
	function rand(min, max) { return Math.floor(Math.random() * max) + min; }
	
	let first = names.firstNames[rand(0, names.firstNames.length)];
	let last = names.lastNames[rand(0, names.lastNames.length)];

	return {"first":first, "last":last};
}

module.exports = genName;