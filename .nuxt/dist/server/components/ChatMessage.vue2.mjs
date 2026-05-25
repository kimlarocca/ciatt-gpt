import Tooltip from "../node_modules/primevue/tooltip/index.mjs";
import script from "../node_modules/primevue/button/index2.mjs";
import { defineComponent, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChatMessage",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    const props = __props;
    const formatTime = (timestamp) => {
      return timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const copyMessage = async () => {
      try {
        await (void 0).clipboard.writeText(props.message.content);
      } catch (err) {
        console.error("Failed to copy message:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _directive_tooltip = Tooltip;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-3 mb-4 group chat-message" }, _attrs))}><div class="${ssrRenderClass([_ctx.message.isUser ? "bg-green-600" : "bg-gray-600", "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-medium"])}">${ssrInterpolate(_ctx.message.isUser ? "You" : "JC")}</div><div class="flex-grow min-w-0"><div class="prose prose-invert max-w-none"><p class="text-gray-100 whitespace-pre-wrap break-words mb-0">${_ctx.message.content ?? ""}</p></div><div class="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">${ssrInterpolate(formatTime(_ctx.message.timestamp))}</div></div>`);
      if (!_ctx.message.isUser) {
        _push(ssrRenderComponent(_component_Button, mergeProps({
          onClick: copyMessage,
          class: "opacity-0 group-hover:opacity-100 transition-opacity px-4",
          "aria-label": "Copy message",
          icon: "pi pi-copy"
        }, ssrGetDirectiveProps(_ctx, _directive_tooltip, `Copy message`)), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ChatMessage.vue2.mjs.map
