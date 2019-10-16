import test from "ava";

test("foo", t => {
	t.fail();
});

test('bar', async t => {
	const bar = Promise.resolve("bar");
	t.is(await bar, "bar");
});