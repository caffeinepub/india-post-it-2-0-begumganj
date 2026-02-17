# Specification

## Summary
**Goal:** Make the Branch Postmaster bio/profile overlay feel smoother and more premium, update and improve the bio content and contact info, remove all pink-styled text in favor of an animated blue/yellow/black treatment, and add a persisted rating prompt when the overlay is closed.

**Planned changes:**
- Refine the bio/profile overlay animations (open/close transitions, overlay glow, and typewriter reveal) to be smoother while keeping existing interactions (click-to-open, close button/backdrop/keyboard close, tap/close sounds).
- Update the contact number shown in the profile details to exactly `7771991108`, removing any masked/placeholder formatting.
- Rewrite and expand the profile overlay text in English to better present IPPB expertise, clear insurance explanations, and a friendly/helpful tone (update both the typewriter biodata lines and the longer paragraph).
- Replace all pink UI text styles (including pink gradients and highlight labels) with an animated, readable blue/yellow/black color treatment across the app.
- Add a rating prompt (1–5) that appears when the profile overlay is closed; show confirmation and the last submitted rating to the user; persist and reload the rating via backend.
- Extend the Motoko backend (single actor) with stable storage and methods to submit a rating (validate 1–5) and fetch the most recent rating and timestamp.

**User-visible outcome:** The profile overlay opens/closes smoothly with improved effects, shows updated English bio content and the correct contact number, the UI no longer uses pink-highlight text, and users can submit a 1–5 rating on closing the profile overlay and see their last saved rating even after refreshing.
