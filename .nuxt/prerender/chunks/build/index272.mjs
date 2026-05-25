import { find, findSingle } from 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/dom/index.mjs';
import { findIndexInList } from 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/object/index.mjs';
import { s as script$3 } from './index5.mjs';
import { createElementBlock, openBlock, mergeProps, resolveComponent, Fragment, createBlock, renderSlot, Transition, withCtx, withDirectives, resolveDynamicComponent, createCommentVNode, createElementVNode, vShow } from 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/vue/index.mjs';
import { B as BaseStyle } from './server.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/styled/index.mjs';
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

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-steppanel", {
      "p-steppanel-active": instance.isVertical && instance.active
    }];
  },
  content: "p-steppanel-content"
};
var StepPanelStyle = BaseStyle.extend({
  name: "steppanel",
  classes
});

var script$2 = {
  name: "StepperSeparator",
  hostName: "Stepper",
  "extends": script$3
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("separator")
  }, _ctx.ptm("separator")), null, 16);
}
script$2.render = render$1;
var script$1 = {
  name: "BaseStepPanel",
  "extends": script$3,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    }
  },
  style: StepPanelStyle,
  provide: function provide() {
    return {
      $pcStepPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepPanel",
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcStepper: {
      "default": null
    },
    $pcStepItem: {
      "default": null
    },
    $pcStepList: {
      "default": null
    }
  },
  data: function data() {
    return {
      isSeparatorVisible: false
    };
  },
  mounted: function mounted() {
    if (this.$el) {
      var _this$$pcStepItem, _this$$pcStepList;
      var stepElements = find(this.$pcStepper.$el, '[data-pc-name="step"]');
      var stepPanelEl = findSingle(this.isVertical ? (_this$$pcStepItem = this.$pcStepItem) === null || _this$$pcStepItem === void 0 ? void 0 : _this$$pcStepItem.$el : (_this$$pcStepList = this.$pcStepList) === null || _this$$pcStepList === void 0 ? void 0 : _this$$pcStepList.$el, '[data-pc-name="step"]');
      var stepPanelIndex = findIndexInList(stepPanelEl, stepElements);
      this.isSeparatorVisible = this.isVertical && stepPanelIndex !== stepElements.length - 1;
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active
        }
      });
    },
    updateValue: function updateValue(val) {
      this.$pcStepper.updateValue(val);
    }
  },
  computed: {
    active: function active() {
      var _this$$pcStepItem2, _this$$pcStepper;
      var activeValue2 = !!this.$pcStepItem ? (_this$$pcStepItem2 = this.$pcStepItem) === null || _this$$pcStepItem2 === void 0 ? void 0 : _this$$pcStepItem2.value : this.value;
      return activeValue2 === ((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.d_value);
    },
    isVertical: function isVertical() {
      return !!this.$pcStepItem;
    },
    activeValue: function activeValue() {
      var _this$$pcStepItem3;
      return this.isVertical ? (_this$$pcStepItem3 = this.$pcStepItem) === null || _this$$pcStepItem3 === void 0 ? void 0 : _this$$pcStepItem3.value : this.value;
    },
    id: function id() {
      var _this$$pcStepper2;
      return "".concat((_this$$pcStepper2 = this.$pcStepper) === null || _this$$pcStepper2 === void 0 ? void 0 : _this$$pcStepper2.id, "_steppanel_").concat(this.activeValue);
    },
    ariaControls: function ariaControls() {
      var _this$$pcStepper3;
      return "".concat((_this$$pcStepper3 = this.$pcStepper) === null || _this$$pcStepper3 === void 0 ? void 0 : _this$$pcStepper3.id, "_step_").concat(this.activeValue);
    },
    a11yAttrs: function a11yAttrs() {
      return {
        id: this.id,
        role: "tabpanel",
        "aria-controls": this.ariaControls,
        "data-pc-name": "steppanel",
        "data-p-active": this.active
      };
    }
  },
  components: {
    StepperSeparator: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_StepperSeparator = resolveComponent("StepperSeparator");
  return $options.isVertical ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [!_ctx.asChild ? (openBlock(), createBlock(Transition, mergeProps({
    key: 0,
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
        id: $options.id,
        "class": _ctx.cx("root"),
        role: "tabpanel",
        "aria-controls": $options.ariaControls
      }, $options.getPTOptions("root")), {
        "default": withCtx(function() {
          return [$data.isSeparatorVisible ? (openBlock(), createBlock(_component_StepperSeparator, {
            key: 0
          })) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("content")
          }, $options.getPTOptions("content")), [renderSlot(_ctx.$slots, "default", {
            active: $options.active,
            activateCallback: function activateCallback(val) {
              return $options.updateValue(val);
            }
          })], 16)];
        }),
        _: 3
      }, 16, ["id", "class", "aria-controls"])), [[vShow, $options.active]])];
    }),
    _: 3
  }, 16)) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: function activateCallback(val) {
      return $options.updateValue(val);
    }
  })], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [!_ctx.asChild ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    id: $options.id,
    "class": _ctx.cx("root"),
    role: "tabpanel",
    "aria-controls": $options.ariaControls
  }, $options.getPTOptions("root")), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", {
        active: $options.active,
        activateCallback: function activateCallback(val) {
          return $options.updateValue(val);
        }
      })];
    }),
    _: 3
  }, 16, ["id", "class", "aria-controls"])), [[vShow, $options.active]]) : _ctx.asChild && $options.active ? renderSlot(_ctx.$slots, "default", {
    key: 1,
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: function activateCallback(val) {
      return $options.updateValue(val);
    }
  }) : createCommentVNode("", true)], 64));
}
script.render = render;

export { script as default };
//# sourceMappingURL=index272.mjs.map
