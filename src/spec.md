# Specification

## Summary
**Goal:** Restore the portal UI to the pre-change look by rolling back the recently introduced blinking animations and forced color styling.

**Planned changes:**
- Remove usage of the `icon-live-blink-2s` class across the frontend and disable/remove its CSS animation so icons no longer blink.
- Remove usage of the `heading-primary-live` class and disable/remove its CSS so headings no longer blink and are not forced to dark red.
- Remove usage of the `close-x-live-blink-3s` class and disable/remove its CSS so modal/overlay close (X) icons no longer blink and are not forced red.
- Audit and revert any other helper classes or styling added specifically for the blinking/color update so there are no remaining references in `frontend/src`.

**User-visible outcome:** The UI matches the previous version—no blinking icons, headings, or close buttons, and no forced red/dark-red styling introduced by the recent update.
