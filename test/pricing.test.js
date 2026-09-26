const test = require('node:test');
const assert = require('node:assert/strict');
const { applyDiscountCents } = require('../src/pricing');

test('rounds a fractional-cent discount to the nearest cent', () => {
  assert.equal(applyDiscountCents(1001, 10), 901);
});

test('rejects invalid discount percentages', () => {
  assert.throws(() => applyDiscountCents(1000, 101), /0 through 100/);
});
