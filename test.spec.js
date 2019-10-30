const test = require("ava");

test("Should pass", t => {
	t.pass();
});



test("bar", async t => {
	const bar = Promise.resolve("bar");
	t.is(await bar, "ba");
});

test("should be equal", async t => {
	const bar = 3;
	t.deepEqual(bar, 1);
});
