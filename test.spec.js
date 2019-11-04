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

const foo = Promise.reject(new Error([ '##error 4:4 error "Test failed via `t.fail()`" ',
'##error 3:1 error "test is not defined" ' ]));

test('', async t => {
    await t.throws(foo, 'hello world');
});

