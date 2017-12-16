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
const h = require("human-tools");

// Create a new person with a random name
var randomPerson = new h.Person();

// Create a new person with a specific name
// If you leave out the last name that will be random instead
var billy = new h.Person("Billy", "Bob");

console.log(randomPerson.fullName());

console.log(billy.firstName);
console.log(billy.lastName);
```

# Notes
### Versioning
```
P.T.M

M - Major Release
T - Minor Release
P - Patch
```

# Links
- [GitHub][1]
- [npm][2]
- [Contact][3]

[1]: https://github.com/MininMobile/human-tools
[2]: https://www.npmjs.com/package/human-tools
[3]: mailto:notminin+prod@gmail.com