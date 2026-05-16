# Pack Manifest

## Project / Feature Name
All Components Gallery

## Short Description
A static gallery screen displaying the full range of Kaze UI library exports organized by category cards.

## Design Source
Screenshot export

## Kaze Catalog Source
- Package: `@pcs-security/kaze-ui-library`
- Kaze version: `3.1.8`
- Catalog version: `2026-05-15`
- Catalog schema version: `1.0.0`
- Catalog source: `local`
- Catalog source detail: local bundled fallback catalog

## Pack Contents
- `README_FOR_CLINE.md`
- `pack-manifest.md`
- `handoff.md`
- `kaze-component-mapping.md`
- `cline-implementation-prompt.md`
- `qa-checklist.md`
- `validate-pack.mjs`
- `cline-readiness-standard.md`
- `screenshots/KazeComponentGallery_Default_Desktop.png`

## Screens

### Kaze Component Gallery

Purpose:
Reference gallery for reviewing available Kaze UI components and their intended usage in screen generation.

Screenshots:
- `screenshots/KazeComponentGallery_Default_Desktop.png`
  - State: `Default`
  - Viewport: `Desktop`

Main Visible Actions:
- Review component groups.
- Compare visual component examples.
- Identify matching Kaze exports for screenshot-to-code generation.
- Verify utility exports such as `notification` and `useNotification`.

## Unknowns / Needs Confirmation
- Exact interactive behaviour for each sample component is not confirmed.
- Component props and variants should be verified against the installed Kaze package typings or Storybook.
- Utility exports such as `notification` and `useNotification` should only be used when notification behaviour is required.
- Layout wrappers/cards are not confirmed Kaze exports unless package typings prove they exist.