# Install
### Install Latest Version
```
npm i human-tools --save
```
### Install Older Verison
```
npm i human-tools@0.1.0 --save
```

# Usage
```javascript
// Require package
const h = require("human-tools");

// Create a new person with a random name
let randomPerson = new h.person();

// Create a new person with a specific name
// If you leave out the last name that will be random instead
let billy = new h.person({
	firstName: "billy",
	lastName: "bob",
});

// Get Person Name
console.log(billy.firstName); // billy
console.log(billy.lastName); // bob
console.log(randomPerson.fullName()); // ?

// Get Person Age (In Days)
console.log(randomPersion.age); // ?
```

# Links
- [GitHub][1]
- [npm][2]
- [Contact][3]

[1]: https://github.com/MininMobile/human-tools
[2]: https://www.npmjs.com/package/human-tools
[3]: mailto:notminin@pm.me
