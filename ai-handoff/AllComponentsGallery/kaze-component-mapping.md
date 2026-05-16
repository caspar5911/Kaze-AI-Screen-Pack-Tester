# Kaze Component Mapping

## Source Files
- `screenshots/KazeComponentGallery_Default_Desktop.png`
## Import Rule

Use real unprefixed named exports from `@pcs-security/kaze-ui-library`.

Correct:
```ts
import {
  Button,
  TextField,
  Dropdown,
  Avatar,
  Typography,
} from "@pcs-security/kaze-ui-library";
```

Incorrect:
```ts
// WRONG - fake Kaze-prefixed exports do not exist
import {
  KazeButton,
  KazeInput,
  KazeSelect,
  KazeAvatar,
  KazeTypography,
} from "@pcs-security/kaze-ui-library";
```

## Confirmed Kaze Exports Used

Visual exports:
- `Typography`
- `Button`
- `Avatar`
- `Badge`
- `TextField`
- `TextArea`
- `Dropdown`
- `Datepicker`
- `Timepicker`
- `Checkbox`
- `Radio`
- `RadioGroup`
- `Toggle`
- `Segmented`
- `Slider`
- `Tag`
- `Lozenge`
- `Pills`
- `Swatch`
- `Progress`
- `Steps`
- `Breadcrumb`
- `Tabs`
- `Pagination`
- `Alert`
- `Notification`
- `Toast`
- `Tooltip`
- `Modal`
- `Upload`
- `Collapse`
- `ContextMenu`
- `Table`
- `AgGridTable`
- `CheckboxDropdown`

Utility exports referenced:
- `useNotification`
- `notification`

## Forbidden Fake Names

Do not use fake Kaze-prefixed exports:

- `KazeButton`
- `KazeInput`
- `KazeSelect`
- `KazeAvatar`
- `KazeTypography`
- `KazeSidebar`
- `KazeCard`
- `KazeIcon`
- `KazeLayout`
- `KazeText`
- `KazeFlex`
- `KazeBox`
- `KazeHeading`
- `KazeGreeting`
- `KazePromptBar`
- `KazeModal`
- `KazeTable`
- `KazeDataTable`
- `KazeBadge`
- `KazeTabs`
- `KazeAlert`
- `KazeDatePicker`
- `KazeTimePicker`
- `KazeDropdown`
- `KazeUpload`
- `KazeTooltip`
- `KazeRadio`
- `KazeRadioGroup`
- `KazeCheckbox`
- `KazeCheckboxDropdown`
- `KazeToggle`
- `KazeTextArea`
- `KazeInputText`
- `KazeNotification`
- `KazeToast`
- `KazePagination`
- `KazeBreadcrumb`
- `KazeContextMenu`
- `KazeCollapse`
- `KazeProgress`
- `KazeSteps`
- `KazeSlider`
- `KazePills`
- `KazeSwatch`
- `KazeLozenge`

Primary fake aliases that must never be imported as valid exports: `KazeButton`, `KazeInput`, `KazeSelect`, `KazeAvatar`, `KazeTypography`.

## Fallback Rule

Use `Unknown / verify from Kaze` only as a fallback label when no confirmed Kaze export exists.
Undocumented prop behavior should be verified against package typings or Storybook.

Do not invent components such as `KazeCard`, `KazeSidebar`, `KazeIcon`, `KazeLayout`, `KazeBox`, or `KazeFlex`.

## Icon Usage Rule

There is no confirmed `Icon` export from `@pcs-security/kaze-ui-library`.

If the screenshot shows icons:
- Use the existing project icon pattern if one exists.
- Use inline SVG only if the project has no icon pattern.
- Do not install a new icon library.
- Do not assume any specific icon library unless the project already confirms one.
- Do not invent `KazeIcon`.

## Component Gallery Coverage

Visual Kaze exports are covered in the mapping table above.

Utility exports shown for reference only, not visual components:
- `notification`
- `useNotification`

## Screen Mapping Table

| UI Element | Intended Kaze Pattern | Exact Kaze Export | Confidence | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Heading / Body Text | Typography | Typography | High | Use for gallery headings, labels, and descriptions. |
| Button Examples | Clickable action | Button | High | Use for primary, secondary, and action button previews. |
| Avatar Example | Circular profile image | Avatar | High | Use for circular initials or profile image preview. |
| Badge Example | Count bubble | Badge | High | Use for small count indicators. |
| Text Input Example | Single-line input | TextField | High | Use for compact text input previews. |
| Text Area Example | Multi-line input | TextArea | High | Use for notes or long-text preview. |
| Dropdown Example | Select field | Dropdown | High | Use for option picker preview. |
| Date Input Example | Date picker | Datepicker | High | Use for date selection preview. |
| Time Input Example | Time picker | Timepicker | High | Use for time selection preview. |
| Checkbox Example | Checkbox | Checkbox | High | Use for boolean checkbox preview. |
| Radio Example | Radio option | Radio | High | Use for single radio option preview. |
| Radio Group Example | Grouped radio options | RadioGroup | High | Use for single-choice grouped options. |
| Toggle Example | Toggle switch | Toggle | High | Use for on/off switch preview. |
| Segmented Example | Segmented control | Segmented | High | Use for segmented mode selector. |
| Slider Example | Range selector | Slider | High | Use for range input preview. |
| Tag Example | Metadata/category label | Tag | High | Use for category chips and metadata labels. |
| Lozenge Example | Status label | Lozenge | High | Use for compact status/state label. |
| Pills Example | Pill group | Pills | High | Use for pill-style option group. |
| Swatch Example | Colour swatch | Swatch | High | Use for colour samples. |
| Progress Example | Progress bar | Progress | High | Use for progress indicator. |
| Steps Example | Stepper | Steps | High | Use for multi-step flow preview. |
| Breadcrumb Example | Breadcrumb navigation | Breadcrumb | High | Use for hierarchy/path navigation. |
| Tabs Example | Tab navigation | Tabs | High | Use for section switching. |
| Pagination Example | Pagination control | Pagination | High | Use for page navigation. |
| Alert Example | Alert message | Alert | High | Use for inline info/warning/success/error message. |
| Notification Example | Notification display | Notification | High | Use for notification panel/message. |
| Toast Example | Temporary feedback | Toast | High | Use for temporary feedback message. |
| Tooltip Example | Hover hint | Tooltip | High | Use for contextual help hint. |
| Modal Example | Dialog / popup | Modal | High | Use for overlay dialog preview. |
| Upload Example | File upload / dropzone | Upload | High | Use for upload control preview. |
| Collapse Example | Accordion / collapsible section | Collapse | High | Use for expandable content. |
| Context Menu Example | Contextual action menu | ContextMenu | High | Use for contextual actions. |
| Table Example | Simple data table | Table | High | Use for basic tabular display. |
| Enterprise Grid Example | Complex data grid | AgGridTable | High | Use for sortable/filterable enterprise grid. |
| Checkbox Dropdown Example | Multi-select dropdown | CheckboxDropdown | High | Use for checkbox-based multi-select dropdown. |
| Utility Notification Hook | Notification hook | useNotification | High | Utility export only, not a visual component. |
| Utility Notification Function | Notification function | notification | High | Utility export only, not a visual component. |