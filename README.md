You should not use this as its no longer supported
===

[ ![Codeship Status for agonbina/store-validate](https://www.codeship.io/projects/088558b0-14db-0132-8085-3ea9ac9fe796/status)](https://www.codeship.io/projects/33539)

store-validate
====
A [datastore](https://github.com/bredele/datastore/) plugin to validate your data using a JSON Schema.
Also works with [sleek](https://github.com/bredele/sleek/)

Internally it uses [swagger-validate](https://github.com/signalfuse/swagger-validate) which works in the browser and nodeland

Example:
====
```
var Store = require('datastore');
var validate = require('..');

var user = new Store({
    username: 'agonbina',
    age: 25
});
var userSchema = {
    properties: {
        username: { type: 'string' },
        age: { type: 'number' }
    },
    required: [ 'username', 'age' ]
};

user.use(validate, userSchema);

var result = user.validate(); // No errors, 'result' is undefined

```

Run tests with **npm test**
