import { s as script$2 } from './index5.mjs';
import { B as BaseStyle } from './server.mjs';
import { createBlock, renderSlot, openBlock, resolveDynamicComponent, mergeProps, withCtx } from 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/vue/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/styled/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/dom/index.mjs';
import 'file:///Users/kimlarocca/Websites/ciatt-gpt/node_modules/@primeuix/utils/object/index.mjs';
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
  root: "p-formfield p-component"
};
var FormFieldStyle = BaseStyle.extend({
  name: "formfield",
  classes
});

var script$1 = {
  name: "BaseFormField",
  "extends": script$2,
  style: FormFieldStyle,
  props: {
    name: {
      type: String,
      "default": void 0
    },
    resolver: {
      type: Function,
      "default": void 0
    },
    initialValue: {
      type: null,
      "default": void 0
    },
    validateOnValueUpdate: {
      type: Boolean,
      "default": void 0
    },
    validateOnBlur: {
      type: Boolean,
      "default": void 0
    },
    validateOnMount: {
      type: Boolean,
      "default": void 0
    },
    validateOnSubmit: {
      type: Boolean,
      "default": void 0
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  provide: function provide() {
    return {
      $pcFormField: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script = {
  name: "FormField",
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcForm: {
      "default": void 0
    }
  },
  watch: {
    formControl: {
      immediate: true,
      handler: function handler(newValue) {
        var _this$$pcForm, _this$$pcForm$registe;
        (_this$$pcForm = this.$pcForm) === null || _this$$pcForm === void 0 || (_this$$pcForm$registe = _this$$pcForm.register) === null || _this$$pcForm$registe === void 0 || _this$$pcForm$registe.call(_this$$pcForm, this.name, newValue);
      }
    }
  },
  computed: {
    formControl: function formControl() {
      return {
        name: this.name,
        resolver: this.resolver,
        initialValue: this.initialValue,
        validateOnValueUpdate: this.validateOnValueUpdate,
        validateOnBlur: this.validateOnBlur,
        validateOnMount: this.validateOnMount,
        validateOnSubmit: this.validateOnSubmit
      };
    },
    field: function field() {
      var _this$$pcForm2;
      return ((_this$$pcForm2 = this.$pcForm) === null || _this$$pcForm2 === void 0 || (_this$$pcForm2 = _this$$pcForm2.fields) === null || _this$$pcForm2 === void 0 ? void 0 : _this$$pcForm2[this.name]) || {};
    },
    fieldAttrs: function fieldAttrs() {
      return _objectSpread(_objectSpread({}, this.field.props), this.field.states);
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", mergeProps({
        props: $options.field.props
      }, $options.fieldAttrs))];
    }),
    _: 3
  }, 16, ["class"])) : renderSlot(_ctx.$slots, "default", mergeProps({
    key: 1,
    "class": _ctx.cx("root"),
    props: $options.field.props
  }, $options.fieldAttrs));
}
script.render = render;

export { script as default };
//# sourceMappingURL=index2121.mjs.map
