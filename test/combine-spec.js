'use strict';

var _combine_cjs = require('../dist/combine_cjs.js');

var _combine_cjs2 = _interopRequireDefault(_combine_cjs);

var _index = require('../node_modules/expect.js/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("combine", function () {
	// sanity checks
	it("extends an object non-destructively", function () {
		return (0, _index2.default)((0, _combine_cjs2.default)({ a: 1, b: 2 }, { a: 3 })).to.eql({ a: 3, b: 2 });
	});
	it("deep merges", function () {
		return (0, _index2.default)((0, _combine_cjs2.default)({ obj: { a: 1 } }, { obj: { b: 2 } })).to.eql({ obj: { a: 1, b: 2 } });
	});

	// arrays are overwritten
	it("overwrites arrays", function () {
		return (0, _index2.default)((0, _combine_cjs2.default)({ a: [1, 2], b: true }, { a: [3] })).to.eql({ a: [3], b: true });
	});

	// key with undefined value, removes the key
	it("removes keys from destination that are present but set to undefined in the source", function () {
		return (0, _index2.default)((0, _combine_cjs2.default)({ a: 1, b: 2, c: 3 }, { b: undefined, c: 4 })).to.eql({ a: 1, c: 4 });
	});
});