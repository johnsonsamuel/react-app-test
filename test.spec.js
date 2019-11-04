const test = require("ava");

test("Should pass", t => {
	t.fail();
});

test("should be equal", t => {
	const bar = 3;
	t.deepEqual(bar, 1);
});

test("should 2 equal", t => {
	const bar = 3;
	t.is(bar, 1);
});


/* test("-", async t => {
    await t.throws(() => [ "##[error]  I am a test error", "##[error]  test2 hola error" ]);
}); */

test("Should pass", t => {
	t.pass();
});
