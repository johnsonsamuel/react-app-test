const test = require("ava");

/* test("Should pass", t => {
	t.fail();
});

test("should be equal", t => {
	const bar = 3;
	t.deepEqual(bar, 1);
});

test("should 2 equal", t => {
	const bar = 3;
	t.is(bar, 1);
}); */

test('test', async (t) => {
	await t.throws( () => {
	  throw new Error(['##error hola']);
	}, ['##error hola']);
  });
