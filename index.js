
/**
 * A plugin to validate store data using a JSON schema
 * @param store
 * @param schema
 */

var validate = function (store, schema) {

    /**
     *
     * @returns {Array} An array of validation errors
     */

    store.validate = function () {
        var errors = [];

        return errors;
    }
};

module.exports = validate;