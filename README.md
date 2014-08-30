store-validate
====

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

API:
====