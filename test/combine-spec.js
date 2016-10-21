'use strict';

var _combine_cjs = require('../dist/combine_cjs.js');

var _combine_cjs2 = _interopRequireDefault(_combine_cjs);

var _index = require('../node_modules/expect.js/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("combine", function () {
	it("extends an object non-destructively", function () {
		return (0, _index2.default)((0, _combine_cjs2.default)({ a: 1, b: 2 }, { a: 3 })).to.eql({ a: 3, b: 2 });
	});
});