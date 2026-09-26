'use strict';

function applyDiscountCents(amountCents, discountPercent) {
  if (!Number.isInteger(amountCents) || amountCents < 0) {
    throw new TypeError('amountCents must be a non-negative integer');
  }
  if (!Number.isInteger(discountPercent) || discountPercent < 0 || discountPercent > 100) {
    throw new RangeError('discountPercent must be an integer from 0 through 100');
  }
  return Math.floor((amountCents * (100 - discountPercent) + 50) / 100);
}

module.exports = { applyDiscountCents };
