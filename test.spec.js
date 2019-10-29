import test from "ava";
//hola fol

test("fooo", t => {
	t.throws(() => '##[error] Test failed.');
});

// test("bar", async t => {
// 	const bar = Promise.resolve("bar");
// 	t.is(await bar, "bsrhh");
// });
//
