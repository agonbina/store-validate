var Store = require('datastore');
var validate = require('..');

var user = new Store({
    username: 'agonbina',
    age: 25
});
var userSchema = {
    properties: {
        age: { type: 'number' }
    }
};

var result = user.use(validate, userSchema);
console.log(result); // undefined