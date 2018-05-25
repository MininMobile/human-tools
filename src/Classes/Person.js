const genName = require("./../Functions/genName");

/**
 * The Person Class is used for defining Humen
 */
class Person {
	/**
	 * Sets the name for the Person
	 * @param {string} first
	 * @param {string} last
	 */
	constructor(first = null, last = null) {
		/** @type {string} */
		this.firstName = first;
		/** @type {string} */
		this.lastName = last;

		if (first || last == null) {
			let name = genName();
			if (first == null) this.firstName = name.first;
			if (last == null) this.lastName = name.last;
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