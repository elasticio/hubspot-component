'use strict';
const assert = require('chai').assert;

describe('Sample test', () => {

    it('should be ok', () => Promise.resolve(true).then((result) => {
        assert.ok(result);
    }));

});
