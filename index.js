var names = require("./names.json");

var getName = () => {
    function rand(min, max) { return Math.floor(Math.random() * max) + min; }
    
    let first = names.firstNames[rand(0, names.firstNames.length)];
    let last = names.lastNames[rand(0, names.lastNames.length)];

    return {"first":first, "last":last};
}

var person = function(first = null, last = null) {
    this.firstName = first;
    this.lastName = last;

    if (first || last == null) {
        let name = getName();
        if (first == null) this.firstName = name.first;
        if (last == null) this.lastName = name.last;
    }

    this.fullName = () => `${this.firstName} ${this.lastName}`;
}

// Export
exports = {
    "Person":person,
    "getName":getName
}