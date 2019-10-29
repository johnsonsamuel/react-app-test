import test from "ava";
//hola col

test("fooo", t => {
	t.pass();
});

test("bar", async t => {
	const bar = Promise.resolve("bar");
	t.is(await bar, "bsrhh");
});
//
