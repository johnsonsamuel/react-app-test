/* Modules  s*/

var test = require('tape');

/* Tests */

test('1 === 1', function(assert) {
  assert.plan(1);
  assert.equal(1, 2);
});

test('2 === 2', function(assert) {
  assert.plan(1);
  assert.equal(2, 2);
});