store-validate
====

Example:
====
```
var Store = require('datastore');
var validate = require('store-validate');

var user = new Store({ username: 'agonbina' });
user.use(validate, {
  username: { type: 'string' },
  required: [ 'username' ]
});

```

API:
====