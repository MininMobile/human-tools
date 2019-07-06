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
	 * initialize a person
	 * @param {{firstName: string, lastName: string, age: number, sex: "male"|"female" }} [options] sets options of a person
	 * @memberof Person
	 */
	constructor(options = {
		firstName: undefined,
		lastName: undefined,
		age: undefined,
		sex: undefined,
	}) {
		this.sex = options.sex || ["male", "female"][Math.round(Math.random())];

		{ // set name
			let name;

			if (!options.firstName || !options.lastName)
				name = generateName([this.sex, "unisex"][Math.round(Math.random())]);

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
