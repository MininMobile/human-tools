const genName = require("./../Util/genName");
const rand = require("./../Util/rand");
const trans = require("./../Util/trans");

/**
 * The Person Class is used for defining Humen
 */
class Person {
	/**
	 * Sets the name for the Person
	 * @param {string} first Enter `null` to skip
	 * @param {string} last Enter `null` to skip
	 * @param {number} age Represented in days, Enter `null` to skip
	 * @returns {class} Person
	 */
	constructor(first = null, last = null, age = null) {
		/** @type {string} */
		this.firstName = first;
		/** @type {string} */
		this.lastName = last;
		/** @type {number} */
		this.age = age;

		if (first || last == null) {
			let name = genName();
			if (first == null) this.firstName = name.first;
			if (last == null) this.lastName = name.last;
		}

		if (age == null) {
			let myage = rand(1, 80);
			this.age = trans(myage, "days", "years");
		}
	}

	/**
	 * The full name of the Person
	 * @returns {string} Full name of Person
	 */
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

module.exports = Person;