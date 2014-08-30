var validate = require('..');
var Store = require('datastore');
var assert = require('assert');

describe('store-validate middleware', function () {

    var store = null;
    beforeEach(function () {
        store = new Store({
            username: 'agonbina'
        });

        store.use(validate, {
            username: { type: 'string' }
        });
    });

    it('should not be empty', function () {
        assert.notEqual(store, null);
    });

    it('should have the validate handler', function () {
        assert.equal(typeof store.validate, 'function');
    })

});