import combine from '../dist/combine_cjs.js'; 
import expect from '../node_modules/expect.js/index.js';

describe("combine", () => {
	// sanity checks
	it("extends an object non-destructively", () => expect(combine({a: 1, b: 2}, {a: 3})).to.eql({a: 3, b: 2}));
	it("deep merges", () => expect(combine({obj: {a: 1}}, {obj: {b: 2}})).to.eql({obj: {a: 1, b: 2}}));

	// arrays are overwritten
	it("overwrites arrays", () => expect(combine({a: [1, 2], b: true}, {a: [3]})).to.eql({a: [3], b: true}));

	// key with undefined value, removes the key
	it("removes keys from destination that are present but set to undefined in the source", () => expect(combine({a: 1, b: 2, c: 3}, {b: undefined, c: 4})).to.eql({a: 1, c: 4}));
});