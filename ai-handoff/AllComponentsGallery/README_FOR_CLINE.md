# README FOR CLINE

Project: All Components Gallery

## Start Here
1. Read README_FOR_CLINE.md.
2. Read pack-manifest.md for pack contents, screen/state references, and screenshot paths.
3. Read handoff.md for layout, visible actions, states, and unknowns.
4. Read kaze-component-mapping.md for Kaze export guidance.
5. Read cline-implementation-prompt.md before writing code.
6. Use qa-checklist.md for validation before handoff.

## Screenshots
- screenshots/KazeComponentGallery_Default_Desktop.png

## Validation Before Use
Before giving this pack to Cline, run:

```bash
node validate-pack.mjs
```

The pack is not considered Cline-ready unless validation passes.

Do not proceed if:
- screenshot files are missing
- manifest does not reference each screenshot
- Kaze mapping contains contradictory import rules
- fake Kaze-prefixed components are treated as valid
- placement rule is missing
- screenshot usage rule is missing
- anti-hallucination rules are missing

## Kaze Rules
- Verify real exports from @pcs-security/kaze-ui-library before importing.
- Prefer real unprefixed exports such as Button, TextField, Dropdown, Avatar, and Typography when confirmed.
- Do not use fake Kaze-prefixed exports such as KazeButton, KazeInput, KazeSelect, KazeAvatar, or KazeTypography.
- If a suggested Kaze export does not work, use the closest approved Kaze/project pattern and report it.

## Guardrails
- Inspect the target project before writing code.
- Use screenshots as visual references only.
- Do not infer backend APIs, routes, authentication logic, data persistence, or business workflows from screenshots.
- Do not invent routes, APIs, dropdown values, permission rules, state architecture, design tokens, global styles, dependencies, or Kaze exports.
- Mark unconfirmed behaviour as TODO.