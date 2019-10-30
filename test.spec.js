import test from "ava";
//hola fol

test("fooo", t => {
	const error = {
		message: ["##[error] Test failed1","##[error] Test failed2"]
	}
	t.throws(() => error.message);
});

// test("bar", async t => {
// 	const bar = Promise.resolve("bar");
// 	t.is(await bar, "bsrhh");
// });
//
