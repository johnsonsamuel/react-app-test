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

const foo = Promise.reject(new Error([ '##error 4:4 error111',
'##error 3:1 erro2' ]));

test('', async t => {
    await t.throws(foo, 'hello world');
});

