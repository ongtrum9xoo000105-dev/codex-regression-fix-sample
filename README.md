# Codex Regression Fix Sample

A minimal, reproducible Node.js portfolio sample showing a scoped regression fix backed by a test-first workflow.

## Scenario
A money discount calculation can produce a fractional cent. The acceptance rule is to round to the nearest cent, not silently floor the result.

Example: 1001 cents with a 10% discount is 900.9 cents and must become **901 cents**.

## Deliverables
- Focused implementation in `src/pricing.js`
- Regression tests in `test/pricing.test.js`
- Captured RED and GREEN test output in `evidence/`
- Verification summary in `VERIFICATION.md`

## Run
Requires Node.js 20+.

```bash
npm test
```

No network, credentials, database, browser, or paid service is required.

## Scope
This repository is intentionally small. It demonstrates reproducing one defect, pinning it with a regression test, implementing a focused fix, and verifying the final behavior without unrelated changes.
