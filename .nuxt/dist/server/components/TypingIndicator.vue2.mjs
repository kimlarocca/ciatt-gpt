import { defineComponent, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TypingIndicator",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-3 mb-4" }, _attrs))} data-v-b344c3d2><div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-medium" data-v-b344c3d2> CIATT </div><div class="flex-grow" data-v-b344c3d2><div class="bg-gray-700 rounded-lg px-4 py-3 inline-block" data-v-b344c3d2><div class="flex space-x-1" data-v-b344c3d2><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0ms" })}" data-v-b344c3d2></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "150ms" })}" data-v-b344c3d2></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="${ssrRenderStyle({ "animation-delay": "300ms" })}" data-v-b344c3d2></div></div></div></div></div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=TypingIndicator.vue2.mjs.map
