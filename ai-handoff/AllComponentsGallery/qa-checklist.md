# QA Checklist

## 1. Pack Integrity
- [ ] `pack-manifest.md` exists.
- [ ] `README_FOR_CLINE.md` exists.
- [ ] `handoff.md` exists.
- [ ] `kaze-component-mapping.md` exists.
- [ ] `cline-implementation-prompt.md` exists.
- [ ] `qa-checklist.md` exists.
- [ ] Screenshot folder exists.
- [ ] Screenshot files exist.
- [ ] Manifest references every screenshot path.

## 2. Kaze Usage
- [ ] Uses only real `@pcs-security/kaze-ui-library` exports.
- [ ] Allows valid unprefixed exports such as `Button`, `TextField`, `Dropdown`, `Avatar`, and `Typography`.
- [ ] Does not use fake Kaze-prefixed components such as `KazeButton`, `KazeInput`, `KazeSelect`, `KazeAvatar`, or `KazeTypography`.
- [ ] Does not import `KazeButton`.
- [ ] Does not import `KazeInput`.
- [ ] Does not import `KazeSelect`.
- [ ] Does not import `KazeAvatar`.
- [ ] Does not import `KazeTypography`.
- [ ] Does not install another UI library.
- [ ] Does not bypass Kaze when a suitable Kaze component exists.

## 3. Visual
- [ ] Layout matches screenshot.
- [ ] Primary screen content matches screenshot.
- [ ] Visible controls match screenshot.
- [ ] Action buttons, panels, and component examples match screenshot.
- [ ] Spacing is close to screenshot.
- [ ] Typography hierarchy is close to screenshot.
- [ ] Responsive behaviour does not break the layout.

## 4. Implementation Safety
- [ ] No fake backend APIs.
- [ ] No fake route paths.
- [ ] No invented authentication logic.
- [ ] No invented persistence logic.
- [ ] No unnecessary global CSS.
- [ ] No unnecessary dependencies.
- [ ] No broad project refactor.

## 5. Code Quality
- [ ] TypeScript compiles.
- [ ] No unused imports.
- [ ] No obvious accessibility regression.
- [ ] Component is isolated.
- [ ] File placement follows existing project structure.
- [ ] Build/typecheck/lint results are reported.

## 6. Final Response
- [ ] Changed files are listed.
- [ ] Kaze components used are listed.
- [ ] Validation results are listed.
- [ ] Assumptions are listed.
- [ ] Fallbacks are listed.

## 7. Icon Usage
- [ ] Uses `Unknown / verify from Kaze` only as a fallback label, not as a component name.
- [ ] Does not invent `KazeIcon`.
- [ ] Does not assume a specific icon library without project confirmation.
- [ ] Uses existing project icon pattern if available.
- [ ] Uses SVG fallback only if no project icon pattern exists.
- [ ] Does not install a new icon dependency.