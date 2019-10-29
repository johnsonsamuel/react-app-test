import test from "ava";
//hola fol

test("fooo", t => {
	t.pass();
});

test("bar", async t => {
	const bar = Promise.resolve("bar");
	t.is(await bar, "bsrhh");
});
//
