import test from "ava";
//hola cola

test("fooo", t => {
	t.pass();
});

test("bar", async t => {
	const bar = Promise.resolve("bar");
	t.is(await bar, "bsrhh");
});
//
