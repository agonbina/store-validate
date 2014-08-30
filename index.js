
/**
 * Module dependencies
 */

var validator = require('swagger-validate');


/**
 * A plugin to validate store data using a JSON schema
 * @param store
 * @param schema
 */

var validate = function (store, schema) {

    if(schema) { store.schema = schema; }
    else { throw new Error('A schema object must be specified for the validator.'); }


    /**
     * @returns An object representing the raw model
     */

    store.model = function () {
        var model = {};
        store.loop(function (key, value) {
            model[key] = value;
        });

        return model;
    };


    /**
     * @returns {Array} An array of validation errors
     */

    store.validate = function () {
        var model = store.model();

        return validator.model(model, store.schema);
    };
};

module.exports = validate;