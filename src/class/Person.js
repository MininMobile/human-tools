const generateName = require("../util/generateName");
const random = require("../util/random");
const transformTime = require("../util/transformTime");

/**
 * a person
 *
 * @class Person
 */
class Person {
	/**
	 * creates a person
	 * @param {object} options
	 * @returns {class} Person
	 */
	constructor(options = {
		firstName: undefined,
		lastName: undefined,
		age: undefined,
	}) {
		{ // set name
			let name;

			if (!options.firstName || !options.lastName)
				name = generateName();

			/** @type {string} */
			this.firstName = options.firstName || name.first;
			/** @type {string} */
			this.lastName = options.lastName || name.last;
		}

		/** @type {number} */
		this.age = options.age || transformTime(random(1, 90), "days", "years");
	}

	/**
	 * returns formatted name
	 * @returns {string}
	 */
	fullName() {
		return `${this.firstNamethis.firstName.substring(1)} ${this.lastName}`;
	}
}

module.exports = Person;
