var validate = require('..');
var Store = require('datastore');
var assert = require('assert');

describe('store-validate middleware', function () {

    var store = null;
    var schema = {
        username: { type: 'string' },
        required: [ 'username' ]
    };

    beforeEach(function () {
        store = new Store({
            username: 'agonbina'
        });

        store.use(validate, schema);
    });

    it('should not have an empty store', function () {
        assert.notEqual(store, null);
    });

    it('should have the validate handler', function () {
        assert.equal(typeof store.validate, 'function');
    });

    it('should not have an empty schema', function () {
        assert.notEqual(store.schema, null);
    });

    it('should validate required properties correctly', function () {
        var schema = {
            properties: {
                username: { type: 'string' },
                age: { type: 'number' }
            },
            required: [ 'username', 'age' ]
        };
        var user = new Store({
            username: 'agonbina',
            age: 25
        }).use(validate, schema);

        assert.equal(user.validate(), undefined);
    });

});