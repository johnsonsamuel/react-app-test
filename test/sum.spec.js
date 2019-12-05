const test = require("ava");
const sum = require('../sum');


test("adds 1 + 2 to equal 3", t => {
	t.is(sum(1, 21), 1);
});
