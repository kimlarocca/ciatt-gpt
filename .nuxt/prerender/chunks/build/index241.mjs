import { s as script$2 } from './index5.mjs';
import { B as BaseStyle } from './server.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/dom/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/object/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/vue/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/h3/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/radix3/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/eventbus/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/styles/base/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/vue/server-renderer/index.mjs';

var ColumnStyle = BaseStyle.extend({
  name: "column"
});

var script$1 = {
  name: "BaseColumn",
  "extends": script$2,
  props: {
    columnKey: {
      type: null,
      "default": null
    },
    field: {
      type: [String, Function],
      "default": null
    },
    sortField: {
      type: [String, Function],
      "default": null
    },
    filterField: {
      type: [String, Function],
      "default": null
    },
    dataType: {
      type: String,
      "default": "text"
    },
    sortable: {
      type: Boolean,
      "default": false
    },
    header: {
      type: null,
      "default": null
    },
    footer: {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    "class": {
      type: String,
      "default": null
    },
    headerStyle: {
      type: null,
      "default": null
    },
    headerClass: {
      type: String,
      "default": null
    },
    bodyStyle: {
      type: null,
      "default": null
    },
    bodyClass: {
      type: String,
      "default": null
    },
    footerStyle: {
      type: null,
      "default": null
    },
    footerClass: {
      type: String,
      "default": null
    },
    showFilterMenu: {
      type: Boolean,
      "default": true
    },
    showFilterOperator: {
      type: Boolean,
      "default": true
    },
    showClearButton: {
      type: Boolean,
      "default": false
    },
    showApplyButton: {
      type: Boolean,
      "default": true
    },
    showFilterMatchModes: {
      type: Boolean,
      "default": true
    },
    showAddButton: {
      type: Boolean,
      "default": true
    },
    filterMatchModeOptions: {
      type: Array,
      "default": null
    },
    maxConstraints: {
      type: Number,
      "default": 2
    },
    excludeGlobalFilter: {
      type: Boolean,
      "default": false
    },
    filterHeaderClass: {
      type: String,
      "default": null
    },
    filterHeaderStyle: {
      type: null,
      "default": null
    },
    filterMenuClass: {
      type: String,
      "default": null
    },
    filterMenuStyle: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    expander: {
      type: Boolean,
      "default": false
    },
    colspan: {
      type: Number,
      "default": null
    },
    rowspan: {
      type: Number,
      "default": null
    },
    rowReorder: {
      type: Boolean,
      "default": false
    },
    rowReorderIcon: {
      type: String,
      "default": void 0
    },
    reorderableColumn: {
      type: Boolean,
      "default": true
    },
    rowEditor: {
      type: Boolean,
      "default": false
    },
    frozen: {
      type: Boolean,
      "default": false
    },
    alignFrozen: {
      type: String,
      "default": "left"
    },
    exportable: {
      type: Boolean,
      "default": true
    },
    exportHeader: {
      type: String,
      "default": null
    },
    exportFooter: {
      type: String,
      "default": null
    },
    filterMatchMode: {
      type: String,
      "default": null
    },
    hidden: {
      type: Boolean,
      "default": false
    }
  },
  style: ColumnStyle,
  provide: function provide() {
    return {
      $pcColumn: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Column",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$columns"],
  mounted: function mounted() {
    var _this$$columns;
    (_this$$columns = this.$columns) === null || _this$$columns === void 0 || _this$$columns.add(this.$);
  },
  unmounted: function unmounted() {
    var _this$$columns2;
    (_this$$columns2 = this.$columns) === null || _this$$columns2 === void 0 || _this$$columns2["delete"](this.$);
  },
  render: function render() {
    return null;
  }
};

export { script as default };
//# sourceMappingURL=index241.mjs.map
