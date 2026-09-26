# Codex Regression Fix Sample

A minimal, reproducible Node.js portfolio sample showing a scoped regression fix backed by a test-first workflow.

## Request this service
[Request a quote on TaskBounty](https://www.task-bounty.com/services/codex-verified-engineering-w64wrg)

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

## Evidence notes
This is a self-authored synthetic demonstration, not a client project or paid result. The initial RED log is a missing-module failure; the separate numeric proof demonstrates the actual 900-versus-901 rounding mismatch.

```bash
node evidence/rounding-proof.cjs before  # Intentionally fails: 900 is not 901.
node evidence/rounding-proof.cjs after   # Passes using src/pricing.js.
npm test
```

See [VERIFICATION.md](VERIFICATION.md) for captured output and the exact limits of this small sample.
