# Verification

## Provenance and scope
This is a small, self-authored demonstration using synthetic data. It is not a customer incident, a paid delivery, or evidence of earnings.

## Initial test-first run
The first commit contains the tests before `src/pricing.js` exists. `evidence/red.txt` therefore records a module-not-found error. That initial failure does **not** by itself prove the numeric rounding defect.

## Numeric before/after demonstration
`evidence/rounding-proof.cjs` applies the same expectation to a deliberately buggy flooring expression and to the shipped function.

- `node evidence/rounding-proof.cjs before`: expected failure, exit 1; actual 900, expected 901.
- `node evidence/rounding-proof.cjs after`: pass, exit 0; actual 901, expected 901.
- Captured output: `evidence/red-rounding.txt` and `evidence/green-rounding.txt`.

The deliberately buggy expression is a demonstration fixture, not a reconstruction of a real customer's code.

## Final suite
`node --test` passes both tests. The source implementation is unchanged by this evidence-only clarification.

## Limitations
The two tests cover one fractional-cent example and an invalid discount percentage. They are not an exhaustive financial-domain or large-number precision audit. No external reviewer approval is claimed.
