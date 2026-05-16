# Cline Readiness Standard

A pack is 10/10 only if:

## Required
- Screenshot files exist.
- Manifest references every screenshot.
- Handoff explains the target screen.
- Cline prompt gives implementation sequence.
- Kaze mapping lists real allowed components.
- Fake Kaze-prefixed components are clearly forbidden.
- Placement rule exists.
- Screenshot usage rule exists.
- Anti-hallucination rules exist.
- QA checklist covers visual, Kaze usage, implementation safety, and validation.
- Validation script passes.

## Automatic Fail
- The pack references a screenshot that does not exist.
- The pack contains contradictory Kaze component rules.
- The pack incorrectly forbids valid unprefixed exports such as `Button`, `TextField`, `Dropdown`, `Avatar`, or `Typography`.
- The pack treats KazeButton, KazeInput, KazeSelect, KazeAvatar, or KazeTypography as valid exports.
- The pack tells the agent to invent routes.
- The pack tells the agent to invent APIs.
- The pack requires unknown design tokens.
- The pack requires unknown Kaze components.