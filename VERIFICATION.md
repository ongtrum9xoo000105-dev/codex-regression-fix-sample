# Verification

## Test-first evidence
The first commit contains the regression tests before `src/pricing.js` exists. The captured RED run is in `evidence/red.txt`.

## Final verification
`node --test` passes after the implementation is added. The captured GREEN run is in `evidence/green.txt`.

## Acceptance checks
- Fractional-cent result rounds to nearest cent.
- Discount percentage outside 0..100 is rejected.
- No external service or credential is used.
- Repository contains only synthetic portfolio data.
