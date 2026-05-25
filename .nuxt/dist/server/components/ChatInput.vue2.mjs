import script$2 from "../node_modules/primevue/button/index2.mjs";
import script$1 from "../node_modules/primevue/inputtext/index2.mjs";
import script from "../node_modules/primevue/inputgroup/index2.mjs";
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, withKeys } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChatInput",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean, default: false }
  },
  emits: ["send"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const inputText = ref("");
    const canSend = computed(() => {
      return inputText.value.trim().length > 0 && !props.disabled;
    });
    const sendMessage = () => {
      if (canSend.value) {
        emit("send", inputText.value.trim());
        inputText.value = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputGroup = script;
      const _component_InputText = script$1;
      const _component_Button = script$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 bg-gray-900 fixed bottom-0 left-0 right-0" }, _attrs))} data-v-79bc281a><div class="max-w-5xl mx-auto" data-v-79bc281a>`);
      _push(ssrRenderComponent(_component_InputGroup, { class: "mb-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputText, {
              placeholder: "Ask anything...",
              disabled: _ctx.disabled,
              modelValue: inputText.value,
              "onUpdate:modelValue": ($event) => inputText.value = $event,
              class: "text-white",
              onKeypress: sendMessage
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              icon: "pi pi-send",
              onClick: sendMessage,
              disabled: !canSend.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputText, {
                placeholder: "Ask anything...",
                disabled: _ctx.disabled,
                modelValue: inputText.value,
                "onUpdate:modelValue": ($event) => inputText.value = $event,
                class: "text-white",
                onKeypress: withKeys(sendMessage, ["enter"])
              }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue"]),
              createVNode(_component_Button, {
                icon: "pi pi-send",
                onClick: sendMessage,
                disabled: !canSend.value
              }, null, 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-xs text-gray-500 text-center mt-2" data-v-79bc281a> This parody website was not requested or authorized by any candidate or candidate&#39;s committee. Paid for by <a target="_blank" href="https://www.papnj.com" data-v-79bc281a>People Are People LLC</a>, 971 US Highway 202N #8014, Branchburg, NJ 08876. </p></div></div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ChatInput.vue2.mjs.map
