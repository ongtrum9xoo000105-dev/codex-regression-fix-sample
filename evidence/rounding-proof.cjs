'use strict';
// Synthetic demonstration, not a customer defect or a paid delivery.
// Run `node evidence/rounding-proof.cjs before` to see the numeric failure.
// Run `node evidence/rounding-proof.cjs after` to verify the shipped function.
const assert = require('node:assert/strict');
const { applyDiscountCents } = require('../src/pricing');
const mode = process.argv[2];
if (!['before', 'after'].includes(mode)) {
  throw new Error('Usage: node evidence/rounding-proof.cjs before|after');
}
const deliberatelyBuggy = (cents, percent) => Math.floor(cents * (100 - percent) / 100);
const calculation = mode === 'before' ? deliberatelyBuggy : applyDiscountCents;
const actual = calculation(1001, 10);
console.log(JSON.stringify({ mode, amountCents: 1001, discountPercent: 10, expected: 901, actual }));
assert.equal(actual, 901, 'Discounted amount must round to the nearest cent');
console.log('NUMERIC_ROUNDING_CHECK=PASS');
