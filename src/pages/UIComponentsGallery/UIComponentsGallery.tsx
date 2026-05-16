import { useRef, useState, type Ref } from "react";
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  CheckboxDropdown,
  Collapse,
  ContextMenu,
  Datepicker,
  Lozenge,
  Modal,
  Notification,
  Pagination,
  Pills,
  Progress,
  RadioGroup,
  Segmented,
  Slider,
  Swatch,
  Tabs,
  Tag,
  TextArea,
  TextField,
  Timepicker,
  Toast,
  Toggle,
  Tooltip,
  Upload,
  notification,
  useNotification,
} from "@pcs-security/kaze-ui-library";
import "./UIComponentsGallery.css";

type ToastHandle = {
  triggerToast: (args?: {
    description?: string;
    message?: string;
    type?: "default" | "success" | "info" | "warning" | "error";
  }) => void;
};

const checkboxDropdownOptions = [
  { label: "Inputs", value: "inputs" },
  { label: "Feedback", value: "feedback" },
  { label: "Navigation", value: "navigation" },
];

const radioOptions = [
  { label: "Compact", value: "compact" },
  { label: "Comfortable", value: "comfortable" },
];

const tabItems = [
  {
    key: "overview",
    label: "Overview",
    children: <p>Overview content rendered inside Kaze Tabs.</p>,
  },
  {
    key: "details",
    label: "Details",
    children: <p>Details content rendered inside Kaze Tabs.</p>,
  },
];

const collapseItems = [
  {
    key: "status",
    label: "Component group status",
    children: <p>Forms, feedback, navigation, and overlays are represented.</p>,
  },
];

const contextMenuItems = [
  { key: "inspect", label: "Inspect component" },
  { key: "copy", label: "Copy example name" },
  { key: "remove", label: "Remove example", variant: "danger" as const },
];

// Requested names below are not package exports in @pcs-security/kaze-ui-library@2.3.5.
const skippedRequestedComponents = [
  "Typography",
  "Dropdown",
  "Radio",
  "Steps",
  "Table",
  "AgGridTable",
];

export function UIComponentsGallery() {
  const [query, setQuery] = useState("Kaze gallery");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([
    "inputs",
    "feedback",
  ]);
  const [checked, setChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("compact");
  const [segmentValue, setSegmentValue] = useState("Preview");
  const [sliderValue, setSliderValue] = useState(42);
  const [toggleValue, setToggleValue] = useState(true);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [noticeApi, noticeHolder] = useNotification({ placement: "topRight" });
  const toastRef = useRef<ToastHandle | null>(null);

  function showHookNotification() {
    noticeApi.success({
      message: "useNotification fired",
      description: "This uses the Kaze useNotification hook export.",
      duration: 3,
      showIcon: true,
    });
  }

  function showStaticNotification() {
    notification.info({
      message: "Static notification fired",
      description: "This uses the Kaze notification export.",
      duration: 3,
      showIcon: true,
    });
  }

  function showToast() {
    toastRef.current?.triggerToast({
      message: "Toast fired",
      description: "This uses the Kaze Toast component ref API.",
      type: "info",
    });
  }

  return (
    <main className="gallery-page">
      {noticeHolder}
      <Toast
        ref={toastRef as Ref<unknown>}
        data-testid="gallery-toast"
        message="Toast ready"
      />
      <header className="gallery-header">
        <Breadcrumb
          data-testid="gallery-breadcrumb"
          items={[{ title: "Kaze" }, { title: "UI Components Gallery" }]}
        />
        <h1>Kaze UI Components Gallery</h1>
        <p className="gallery-header__subtitle">
          Minimal React test harness for validating generated handoff output
          against real Kaze UI Library components.
        </p>
      </header>

      <section className="gallery-grid" aria-label="Component examples">
        <div className="component-card">
          <div className="component-card__header">
            <h2>Actions</h2>
            <p>Buttons, tags, badges, avatars, lozenges, pills, and swatches.</p>
          </div>
          <div className="component-card__body">
            <Button intent="primary">Primary</Button>
            <Button intent="secondary">Secondary</Button>
            <Tag data-testid="gallery-tag" intent="primary" tagColor="blue">
              Tag
            </Tag>
            <Lozenge
              data-testid="gallery-lozenge"
              label="In progress"
              status="in-progress"
              weight="bold"
            />
            <Badge data-testid="gallery-badge" count={4} intent="important">
              <Avatar data-testid="gallery-avatar" sizePreset="m">
                KG
              </Avatar>
            </Badge>
            <Pills
              data-testid="gallery-pills"
              options={[
                { label: "Forms", value: "forms" },
                { label: "Feedback", value: "feedback" },
              ]}
            />
            <Swatch
              data-testid="gallery-swatch-primary"
              colour="var(--gallery-swatch-primary)"
              label="Primary"
              shape="circle"
            />
          </div>
        </div>

        <div className="component-card">
          <div className="component-card__header">
            <h2>Forms</h2>
            <p>Text, textarea, dates, times, and grouped selections.</p>
          </div>
          <div className="component-card__body component-card__body--stacked">
            <TextField
              data-testid="gallery-text-field"
              helperText="Editable text field"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Enter label"
              title="TextField"
              value={query}
            />
            <TextArea
              data-testid="gallery-text-area"
              maxLength={120}
              placeholder="Notes for generated handoff output"
              showCount
              title="TextArea"
            />
            <div className="control-row">
              <Datepicker
                data-testid="gallery-date-picker"
                helperText="Single date"
                title="Datepicker"
              />
              <Timepicker
                data-testid="gallery-time-picker"
                helperText="Single time"
                title="Timepicker"
              />
            </div>
          </div>
        </div>

        <div className="component-card">
          <div className="component-card__header">
            <h2>Selection</h2>
            <p>Checkboxes, radio groups, segmented controls, sliders, and toggles.</p>
          </div>
          <div className="component-card__body component-card__body--stacked">
            <Checkbox
              checked={checked}
              data-testid="gallery-checkbox"
              onChange={(event) => setChecked(event.target.checked)}
            >
              Include checked state
            </Checkbox>
            <RadioGroup
              buttonStyle="solid"
              data-testid="gallery-radio-group"
              direction="horizontal"
              onChange={(event) => setRadioValue(event.target.value)}
              optionType="button"
              options={radioOptions}
              value={radioValue}
            />
            <Segmented
              data-testid="gallery-segmented"
              onChange={(value) => setSegmentValue(String(value))}
              options={["Preview", "Specs", "QA"]}
              value={segmentValue}
            />
            <Slider
              data-testid="gallery-slider"
              max={100}
              min={0}
              setValue={setSliderValue}
              startPosition="left"
              value={sliderValue}
            />
            <Toggle
              checked={toggleValue}
              data-testid="gallery-toggle"
              label="Gallery toggle"
              onChange={setToggleValue}
            />
            <CheckboxDropdown
              data-testid="gallery-checkbox-dropdown"
              multiSelect
              options={checkboxDropdownOptions}
              placeholder="Select component groups"
              setSelected={setSelectedGroups}
              showSelectedCount
              title="CheckboxDropdown"
              value={selectedGroups}
            />
          </div>
        </div>

        <div className="component-card">
          <div className="component-card__header">
            <h2>Navigation</h2>
            <p>Tabs, pagination, collapse, tooltip, and context menu.</p>
          </div>
          <div className="component-card__body component-card__body--stacked">
            <Tabs data-testid="gallery-tabs" items={tabItems} />
            <Collapse
              data-testid="gallery-collapse"
              bordered={false}
              items={collapseItems}
            />
            <Pagination
              current={page}
              data-testid="gallery-pagination"
              onChange={setPage}
              pageSize={8}
              total={64}
            />
            <div className="control-row control-row--wrap">
              <Tooltip
                data-testid="gallery-tooltip"
                title="Kaze Tooltip export"
              >
                <Button intent="secondary">Hover target</Button>
              </Tooltip>
              <ContextMenu
                contextMenuItems={contextMenuItems}
                data-testid="gallery-context-menu"
                trigger={["click"]}
              >
                <Button intent="secondary">Open menu</Button>
              </ContextMenu>
            </div>
          </div>
        </div>

        <div className="component-card">
          <div className="component-card__header">
            <h2>Feedback</h2>
            <p>Alerts, progress, notifications, toast, and modal.</p>
          </div>
          <div className="component-card__body component-card__body--stacked">
            <Alert
              data-testid="gallery-alert"
              description="Alert description is visible when showDescription is true."
              showDescription
              showIcon
              title="Alert title"
              type="info"
            />
            <Progress
              data-testid="gallery-progress"
              showInfo
              status="active"
              value="medium"
            />
            <Notification
              data-testid="gallery-notification"
              description="Inline notification panel preview."
              message="Notification title"
              primaryActionLabel="Primary"
              secondaryActionLabel="Secondary"
              showIcon
              type="success"
            />
            <div className="control-row control-row--wrap">
              <Button intent="secondary" onClick={showHookNotification}>
                useNotification
              </Button>
              <Button intent="secondary" onClick={showStaticNotification}>
                notification
              </Button>
              <Button intent="secondary" onClick={showToast}>
                Toast
              </Button>
              <Button intent="primary" onClick={() => setModalOpen(true)}>
                Modal
              </Button>
            </div>
          </div>
        </div>

        <div className="component-card">
          <div className="component-card__header">
            <h2>Upload</h2>
            <p>Upload example with local validation only.</p>
          </div>
          <div className="component-card__body component-card__body--stacked">
            <Upload
              beforeUpload={() => false}
              data-testid="gallery-upload"
              label="Choose file"
              maxCount={1}
              sendErrorMsg={setUploadError}
            />
            {uploadError ? (
              <p className="component-card__note">{uploadError}</p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="metadata-section" aria-labelledby="metadata-title">
        <h2 id="metadata-title">Gallery Metadata</h2>
        <div className="metadata-table-wrap">
          <table className="metadata-table">
            <tbody>
              <tr>
                <th scope="row">Framework</th>
                <td>React + TypeScript + Vite</td>
              </tr>
              <tr>
                <th scope="row">UI Source</th>
                <td>@pcs-security/kaze-ui-library</td>
              </tr>
              <tr>
                <th scope="row">Layout</th>
                <td>Direct render from App.tsx, no routing</td>
              </tr>
              <tr>
                <th scope="row">CSS Import</th>
                <td>@pcs-security/kaze-ui-library/styles.css</td>
              </tr>
              <tr>
                <th scope="row">Skipped Requested Components</th>
                <td>{skippedRequestedComponents.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Modal
        data-testid="gallery-modal"
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
        open={modalOpen}
        title="Kaze Modal"
      >
        <p>Modal content rendered from the Kaze Modal export.</p>
      </Modal>
    </main>
  );
}
