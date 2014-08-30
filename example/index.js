var Store = require('sleek');
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

var result = user.validate();
console.log(result); // undefined