# Cline Implementation Prompt

## Inputs
- `pack-manifest.md`
- `handoff.md`
- `kaze-component-mapping.md`
- `qa-checklist.md`
- `screenshots/` visual references

## Critical First Step

Before writing code:

1. Inspect actual project structure.
2. Inspect existing pages/screens that already use Kaze.
3. Inspect @pcs-security/kaze-ui-library package exports.
4. Inspect Kaze Storybook/docs if available.
5. Confirm exact Kaze export names and props.
6. Do not use guessed Kaze exports.
7. If a suggested Kaze export does not work, use the closest approved Kaze/project pattern and report it.

## Kaze Import Rule

Kaze UI package uses unprefixed named exports from `@pcs-security/kaze-ui-library`.

Correct:

```ts
import { Button, TextField, Dropdown, Avatar, Typography } from "@pcs-security/kaze-ui-library";
```

Incorrect:

```ts
// WRONG — fake Kaze-prefixed exports do not exist
import {
  KazeButton,
  KazeInput,
  KazeSelect,
  KazeAvatar,
  KazeTypography,
} from "@pcs-security/kaze-ui-library";
```

## Implementation Rules

- Use `pack-manifest.md` for screen/state/screenshot references.
- Use `handoff.md` for layout, visible actions, states, and unknowns.
- Use `kaze-component-mapping.md` for Kaze export guidance.
- Use `qa-checklist.md` for validation.
- Use confirmed Kaze exports where available.
- Do not use raw input/button/select/table/modal/form controls if Kaze equivalents exist.
- Use raw HTML only for non-interactive layout wrappers.
- Do not use Ant Design directly if Kaze wraps it.
- Do not invent routes.
- Do not invent APIs.
- Do not invent dropdown values.
- Do not invent permission rules.
- Mark unknown behaviour as TODO.
- Run typecheck/build if available.
- Report unresolved unknowns and fallback choices.

## Placement Rule

Before creating files, inspect the actual project structure.

Use the generated screen folder name:

`UIComponentsGallery`

Place the screen in the closest existing page or screen directory pattern.

Priority:

1. If the project has `src/pages/`, create `src/pages/UIComponentsGallery/`.
2. If the project has `src/screens/`, create `src/screens/UIComponentsGallery/`.
3. If the project has `src/features/`, create it under the closest relevant feature folder.
4. If none of these exist, create `src/pages/UIComponentsGallery/`.

Do not register a route unless:
- the project already has an obvious route registration pattern, and
- route registration is explicitly requested.

Do not invent route paths.

## Screenshot Usage Rule

The screenshot is a visual reference only.

Use it to match:
- layout
- spacing
- visual hierarchy
- text placement
- component choice
- approximate responsive behaviour

Do not infer:
- backend APIs
- route paths
- authentication logic
- database logic
- persistence behaviour
- user permissions
- production business rules

If the screenshot contains unclear behaviour, implement only static frontend behaviour unless explicitly specified in `handoff.md`.

## Implementation Sequence

1. Read `README_FOR_CLINE.md`.
2. Read `handoff.md`.
3. Read `kaze-component-mapping.md`.
4. Read `qa-checklist.md`.
5. Inspect the actual React project structure.
6. Inspect existing usage of `@pcs-security/kaze-ui-library`.
7. Confirm available Kaze exports from existing imports or package typings.
8. Create the screen files following the project's existing structure.
9. Use only real Kaze exports.
10. Match the screenshot visually.
11. Avoid inventing APIs, routes, or backend calls.
12. Run typecheck/build if available.
13. Report changed files and any assumptions.

## Anti-Hallucination Rules

Do not invent:
- Kaze component names
- route paths
- backend API endpoints
- auth logic
- state management architecture
- design tokens
- global styles
- new dependencies
- fake Storybook APIs
- fake test utilities

If a required component is missing from Kaze:
1. Use the closest real Kaze component.
2. If no suitable Kaze component exists, use a minimal native HTML element.
3. Document the fallback in the final response.

Do not install new UI libraries unless explicitly instructed.

## Kaze Setup Rule

Before implementation, inspect existing project usage of:

```ts
@pcs-security/kaze-ui-library
```

Check:
- existing import style
- existing CSS import
- available package version
- existing component usage patterns

Do not guess Kaze API props.

Prefer examples from:
- existing project code
- installed package typings
- Kaze documentation files, if available

If the project already imports Kaze CSS globally, do not duplicate the import.

If no global Kaze CSS import exists, report this as an assumption instead of blindly changing global files.

## Fallback Rule

If a Kaze export is not verified:

1. First search existing project patterns.
2. Use the closest approved existing project pattern.
3. Use raw HTML only for non-interactive layout wrappers.
4. Do not use raw input/button/select if Kaze equivalents exist.
5. Document the fallback clearly.

## Final Response Format

After implementation, respond with:

```txt
Implemented files:
- <file path>
- <file path>

Kaze components used:
- <component>
- <component>

Validation performed:
- Typecheck: pass/fail/not available
- Build: pass/fail/not available
- Lint: pass/fail/not available

Assumptions:
- <assumption>

Fallbacks:
- <fallback, if any>
```

## After Implementation

After implementation, report:

- Files created or modified
- Confirmed Kaze exports used
- Fallbacks used
- TODOs left unresolved
- Typecheck/build result