import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import LazyAutoComplete from "../node_modules/primevue/autocomplete/index.mjs";
import LazyCalendar from "../node_modules/primevue/calendar/index.mjs";
import LazyCascadeSelect from "../node_modules/primevue/cascadeselect/index.mjs";
import LazyCheckbox from "../node_modules/primevue/checkbox/index.mjs";
import LazyCheckboxGroup from "../node_modules/primevue/checkboxgroup/index.mjs";
import LazyChips from "../node_modules/primevue/chips/index.mjs";
import LazyColorPicker from "../node_modules/primevue/colorpicker/index.mjs";
import LazyDatePicker from "../node_modules/primevue/datepicker/index.mjs";
import LazyDropdown from "../node_modules/primevue/dropdown/index.mjs";
import LazyFloatLabel from "../node_modules/primevue/floatlabel/index.mjs";
import LazyFluid from "../node_modules/primevue/fluid/index.mjs";
import LazyIconField from "../node_modules/primevue/iconfield/index.mjs";
import LazyIftaLabel from "../node_modules/primevue/iftalabel/index.mjs";
import LazyInputChips from "../node_modules/primevue/inputchips/index.mjs";
import LazyInputGroup from "../node_modules/primevue/inputgroup/index.mjs";
import LazyInputGroupAddon from "../node_modules/primevue/inputgroupaddon/index.mjs";
import LazyInputIcon from "../node_modules/primevue/inputicon/index.mjs";
import LazyInputMask from "../node_modules/primevue/inputmask/index.mjs";
import LazyInputNumber from "../node_modules/primevue/inputnumber/index.mjs";
import LazyInputOtp from "../node_modules/primevue/inputotp/index.mjs";
import LazyInputSwitch from "../node_modules/primevue/inputswitch/index.mjs";
import LazyInputText from "../node_modules/primevue/inputtext/index.mjs";
import LazyKnob from "../node_modules/primevue/knob/index.mjs";
import LazyListbox from "../node_modules/primevue/listbox/index.mjs";
import LazyMultiSelect from "../node_modules/primevue/multiselect/index.mjs";
import LazyPassword from "../node_modules/primevue/password/index.mjs";
import LazyRadioButton from "../node_modules/primevue/radiobutton/index.mjs";
import LazyRadioButtonGroup from "../node_modules/primevue/radiobuttongroup/index.mjs";
import LazyRating from "../node_modules/primevue/rating/index.mjs";
import LazySelect from "../node_modules/primevue/select/index.mjs";
import LazySelectButton from "../node_modules/primevue/selectbutton/index.mjs";
import LazySlider from "../node_modules/primevue/slider/index.mjs";
import LazyTextarea from "../node_modules/primevue/textarea/index.mjs";
import LazyToggleButton from "../node_modules/primevue/togglebutton/index.mjs";
import LazyToggleSwitch from "../node_modules/primevue/toggleswitch/index.mjs";
import LazyTreeSelect from "../node_modules/primevue/treeselect/index.mjs";
import LazyButton from "../node_modules/primevue/button/index.mjs";
import LazyButtonGroup from "../node_modules/primevue/buttongroup/index.mjs";
import LazySpeedDial from "../node_modules/primevue/speeddial/index.mjs";
import LazySplitButton from "../node_modules/primevue/splitbutton/index.mjs";
import LazyColumn from "../node_modules/primevue/column/index.mjs";
import LazyRow from "../node_modules/primevue/row/index.mjs";
import LazyColumnGroup from "../node_modules/primevue/columngroup/index.mjs";
import LazyDataTable from "../node_modules/primevue/datatable/index.mjs";
import LazyDataView from "../node_modules/primevue/dataview/index.mjs";
import LazyOrderList from "../node_modules/primevue/orderlist/index.mjs";
import LazyOrganizationChart from "../node_modules/primevue/organizationchart/index.mjs";
import LazyPaginator from "../node_modules/primevue/paginator/index.mjs";
import LazyPickList from "../node_modules/primevue/picklist/index.mjs";
import LazyTree from "../node_modules/primevue/tree/index.mjs";
import LazyTreeTable from "../node_modules/primevue/treetable/index.mjs";
import LazyTimeline from "../node_modules/primevue/timeline/index.mjs";
import LazyVirtualScroller from "../node_modules/primevue/virtualscroller/index.mjs";
import LazyAccordion from "../node_modules/primevue/accordion/index.mjs";
import LazyAccordionPanel from "../node_modules/primevue/accordionpanel/index.mjs";
import LazyAccordionHeader from "../node_modules/primevue/accordionheader/index.mjs";
import LazyAccordionContent from "../node_modules/primevue/accordioncontent/index.mjs";
import LazyAccordionTab from "../node_modules/primevue/accordiontab/index.mjs";
import LazyCard from "../node_modules/primevue/card/index.mjs";
import LazyDeferredContent from "../node_modules/primevue/deferredcontent/index.mjs";
import LazyDivider from "../node_modules/primevue/divider/index.mjs";
import LazyFieldset from "../node_modules/primevue/fieldset/index.mjs";
import LazyPanel from "../node_modules/primevue/panel/index.mjs";
import LazyScrollPanel from "../node_modules/primevue/scrollpanel/index.mjs";
import LazySplitter from "../node_modules/primevue/splitter/index.mjs";
import LazySplitterPanel from "../node_modules/primevue/splitterpanel/index.mjs";
import LazyStepper from "../node_modules/primevue/stepper/index.mjs";
import LazyStepList from "../node_modules/primevue/steplist/index.mjs";
import LazyStep from "../node_modules/primevue/step/index.mjs";
import LazyStepItem from "../node_modules/primevue/stepitem/index.mjs";
import LazyStepPanels from "../node_modules/primevue/steppanels/index.mjs";
import LazyStepPanel from "../node_modules/primevue/steppanel/index.mjs";
import LazyTabView from "../node_modules/primevue/tabview/index.mjs";
import LazyTabs from "../node_modules/primevue/tabs/index.mjs";
import LazyTabList from "../node_modules/primevue/tablist/index.mjs";
import LazyTab from "../node_modules/primevue/tab/index.mjs";
import LazyTabPanels from "../node_modules/primevue/tabpanels/index.mjs";
import LazyTabPanel from "../node_modules/primevue/tabpanel/index.mjs";
import LazyToolbar from "../node_modules/primevue/toolbar/index.mjs";
import LazyConfirmDialog from "../node_modules/primevue/confirmdialog/index.mjs";
import LazyConfirmPopup from "../node_modules/primevue/confirmpopup/index.mjs";
import LazyDialog from "../node_modules/primevue/dialog/index.mjs";
import LazyDrawer from "../node_modules/primevue/drawer/index.mjs";
import LazyDynamicDialog from "../node_modules/primevue/dynamicdialog/index.mjs";
import LazyOverlayPanel from "../node_modules/primevue/overlaypanel/index.mjs";
import LazyPopover from "../node_modules/primevue/popover/index.mjs";
import LazySidebar from "../node_modules/primevue/sidebar/index.mjs";
import LazyFileUpload from "../node_modules/primevue/fileupload/index.mjs";
import LazyBreadcrumb from "../node_modules/primevue/breadcrumb/index.mjs";
import LazyContextMenu from "../node_modules/primevue/contextmenu/index.mjs";
import LazyDock from "../node_modules/primevue/dock/index.mjs";
import LazyMenu from "../node_modules/primevue/menu/index.mjs";
import LazyMenubar from "../node_modules/primevue/menubar/index.mjs";
import LazyMegaMenu from "../node_modules/primevue/megamenu/index.mjs";
import LazyPanelMenu from "../node_modules/primevue/panelmenu/index.mjs";
import LazySteps from "../node_modules/primevue/steps/index.mjs";
import LazyTabMenu from "../node_modules/primevue/tabmenu/index.mjs";
import LazyTieredMenu from "../node_modules/primevue/tieredmenu/index.mjs";
import LazyMessage from "../node_modules/primevue/message/index.mjs";
import LazyInlineMessage from "../node_modules/primevue/inlinemessage/index.mjs";
import LazyToast from "../node_modules/primevue/toast/index.mjs";
import LazyCarousel from "../node_modules/primevue/carousel/index.mjs";
import LazyGalleria from "../node_modules/primevue/galleria/index.mjs";
import LazyImage from "../node_modules/primevue/image/index.mjs";
import LazyImageCompare from "../node_modules/primevue/imagecompare/index.mjs";
import LazyAvatar from "../node_modules/primevue/avatar/index.mjs";
import LazyAvatarGroup from "../node_modules/primevue/avatargroup/index.mjs";
import LazyBadge from "../node_modules/primevue/badge/index.mjs";
import LazyBlockUI from "../node_modules/primevue/blockui/index.mjs";
import LazyChip from "../node_modules/primevue/chip/index.mjs";
import LazyInplace from "../node_modules/primevue/inplace/index.mjs";
import LazyMeterGroup from "../node_modules/primevue/metergroup/index.mjs";
import LazyOverlayBadge from "../node_modules/primevue/overlaybadge/index.mjs";
import LazyScrollTop from "../node_modules/primevue/scrolltop/index.mjs";
import LazySkeleton from "../node_modules/primevue/skeleton/index.mjs";
import LazyProgressBar from "../node_modules/primevue/progressbar/index.mjs";
import LazyProgressSpinner from "../node_modules/primevue/progressspinner/index.mjs";
import LazyTag from "../node_modules/primevue/tag/index.mjs";
import LazyTerminal from "../node_modules/primevue/terminal/index.mjs";
import LazyForm from "../node_modules/_primevue/forms/form/index.mjs";
import LazyFormField from "../node_modules/_primevue/forms/formfield/index.mjs";
const lazyGlobalComponents = [
  ["AutoComplete", LazyAutoComplete],
  ["Calendar", LazyCalendar],
  ["CascadeSelect", LazyCascadeSelect],
  ["Checkbox", LazyCheckbox],
  ["CheckboxGroup", LazyCheckboxGroup],
  ["Chips", LazyChips],
  ["ColorPicker", LazyColorPicker],
  ["DatePicker", LazyDatePicker],
  ["Dropdown", LazyDropdown],
  ["FloatLabel", LazyFloatLabel],
  ["Fluid", LazyFluid],
  ["IconField", LazyIconField],
  ["IftaLabel", LazyIftaLabel],
  ["InputChips", LazyInputChips],
  ["InputGroup", LazyInputGroup],
  ["InputGroupAddon", LazyInputGroupAddon],
  ["InputIcon", LazyInputIcon],
  ["InputMask", LazyInputMask],
  ["InputNumber", LazyInputNumber],
  ["InputOtp", LazyInputOtp],
  ["InputSwitch", LazyInputSwitch],
  ["InputText", LazyInputText],
  ["Knob", LazyKnob],
  ["Listbox", LazyListbox],
  ["MultiSelect", LazyMultiSelect],
  ["Password", LazyPassword],
  ["RadioButton", LazyRadioButton],
  ["RadioButtonGroup", LazyRadioButtonGroup],
  ["Rating", LazyRating],
  ["Select", LazySelect],
  ["SelectButton", LazySelectButton],
  ["Slider", LazySlider],
  ["Textarea", LazyTextarea],
  ["ToggleButton", LazyToggleButton],
  ["ToggleSwitch", LazyToggleSwitch],
  ["TreeSelect", LazyTreeSelect],
  ["Button", LazyButton],
  ["ButtonGroup", LazyButtonGroup],
  ["SpeedDial", LazySpeedDial],
  ["SplitButton", LazySplitButton],
  ["Column", LazyColumn],
  ["Row", LazyRow],
  ["ColumnGroup", LazyColumnGroup],
  ["DataTable", LazyDataTable],
  ["DataView", LazyDataView],
  ["OrderList", LazyOrderList],
  ["OrganizationChart", LazyOrganizationChart],
  ["Paginator", LazyPaginator],
  ["PickList", LazyPickList],
  ["Tree", LazyTree],
  ["TreeTable", LazyTreeTable],
  ["Timeline", LazyTimeline],
  ["VirtualScroller", LazyVirtualScroller],
  ["Accordion", LazyAccordion],
  ["AccordionPanel", LazyAccordionPanel],
  ["AccordionHeader", LazyAccordionHeader],
  ["AccordionContent", LazyAccordionContent],
  ["AccordionTab", LazyAccordionTab],
  ["Card", LazyCard],
  ["DeferredContent", LazyDeferredContent],
  ["Divider", LazyDivider],
  ["Fieldset", LazyFieldset],
  ["Panel", LazyPanel],
  ["ScrollPanel", LazyScrollPanel],
  ["Splitter", LazySplitter],
  ["SplitterPanel", LazySplitterPanel],
  ["Stepper", LazyStepper],
  ["StepList", LazyStepList],
  ["Step", LazyStep],
  ["StepItem", LazyStepItem],
  ["StepPanels", LazyStepPanels],
  ["StepPanel", LazyStepPanel],
  ["TabView", LazyTabView],
  ["Tabs", LazyTabs],
  ["TabList", LazyTabList],
  ["Tab", LazyTab],
  ["TabPanels", LazyTabPanels],
  ["TabPanel", LazyTabPanel],
  ["Toolbar", LazyToolbar],
  ["ConfirmDialog", LazyConfirmDialog],
  ["ConfirmPopup", LazyConfirmPopup],
  ["Dialog", LazyDialog],
  ["Drawer", LazyDrawer],
  ["DynamicDialog", LazyDynamicDialog],
  ["OverlayPanel", LazyOverlayPanel],
  ["Popover", LazyPopover],
  ["Sidebar", LazySidebar],
  ["FileUpload", LazyFileUpload],
  ["Breadcrumb", LazyBreadcrumb],
  ["ContextMenu", LazyContextMenu],
  ["Dock", LazyDock],
  ["Menu", LazyMenu],
  ["Menubar", LazyMenubar],
  ["MegaMenu", LazyMegaMenu],
  ["PanelMenu", LazyPanelMenu],
  ["Steps", LazySteps],
  ["TabMenu", LazyTabMenu],
  ["TieredMenu", LazyTieredMenu],
  ["Message", LazyMessage],
  ["InlineMessage", LazyInlineMessage],
  ["Toast", LazyToast],
  ["Carousel", LazyCarousel],
  ["Galleria", LazyGalleria],
  ["Image", LazyImage],
  ["ImageCompare", LazyImageCompare],
  ["Avatar", LazyAvatar],
  ["AvatarGroup", LazyAvatarGroup],
  ["Badge", LazyBadge],
  ["BlockUI", LazyBlockUI],
  ["Chip", LazyChip],
  ["Inplace", LazyInplace],
  ["MeterGroup", LazyMeterGroup],
  ["OverlayBadge", LazyOverlayBadge],
  ["ScrollTop", LazyScrollTop],
  ["Skeleton", LazySkeleton],
  ["ProgressBar", LazyProgressBar],
  ["ProgressSpinner", LazyProgressSpinner],
  ["Tag", LazyTag],
  ["Terminal", LazyTerminal],
  ["Form", LazyForm],
  ["FormField", LazyFormField]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
export {
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 as default
};
//# sourceMappingURL=virtual_nuxt__Users_kimlarocca_Websites_ciatt-gpt_.nuxt_components.plugin.mjs.map
