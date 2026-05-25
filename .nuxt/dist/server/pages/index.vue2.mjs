import "../components/ChatMessage.vue.mjs";
import __nuxt_component_1 from "../components/TypingIndicator.vue.mjs";
import __nuxt_component_2 from "../components/ChatInput.vue.mjs";
import Tooltip from "../node_modules/primevue/tooltip/index.mjs";
import script from "../node_modules/primevue/button/index2.mjs";
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { useChat } from "../composables/useChat.mjs";
import _sfc_main$1 from "../components/ChatMessage.vue2.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { messages, isTyping, sendUserMessage, clearChat } = useChat();
    const messagesContainer = ref();
    const handleSendMessage = (message) => {
      sendUserMessage(message);
      scrollToLatestMessage();
    };
    const scrollToLatestMessage = () => {
      if (messagesContainer.value && messages.value.length > 0) {
        setTimeout(() => {
          if (messagesContainer.value) {
            const chatMessages = messagesContainer.value.querySelectorAll(".chat-message");
            let lastUserMessageIndex = -1;
            for (let i = messages.value.length - 1; i >= 0; i--) {
              if (messages.value[i].isUser) {
                lastUserMessageIndex = i;
                break;
              }
            }
            if (lastUserMessageIndex >= 0 && chatMessages.length > lastUserMessageIndex) {
              const lastUserMessage = chatMessages[lastUserMessageIndex];
              lastUserMessage.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
              });
            } else {
              messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
            }
          }
        }, 100);
      }
    };
    watch(
      [messages, isTyping],
      () => {
        scrollToLatestMessage();
      },
      { deep: true, immediate: true }
    );
    function openDonate() {
      (void 0).open("https://secure.papnj.com/donate", "_blank");
    }
    function openVolunteer() {
      (void 0).open("https://papnj.com/#volunteer", "_blank");
    }
    function openLinktree() {
      (void 0).open("https://linktr.ee/papnj", "_blank");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _component_ChatMessage = _sfc_main$1;
      const _component_TypingIndicator = __nuxt_component_1;
      const _component_ChatInput = __nuxt_component_2;
      const _directive_tooltip = Tooltip;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen bg-gray-900 text-white flex flex-col" }, _attrs))} data-v-6a46b891><header class="border-b border-gray-700 p-4 flex-shrink-0" data-v-6a46b891><div class="max-w-4xl mx-auto flex items-center justify-between" data-v-6a46b891><p class="text-white cursor-pointer" data-v-6a46b891>CiattGPT</p><div class="flex items-center gap-2" data-v-6a46b891>`);
      _push(ssrRenderComponent(_component_Button, mergeProps({
        "aria-label": "New Chat",
        onClick: unref(clearChat),
        class: "hidden lg:block text-white cursor-pointer"
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, `Start a new chat!`, void 0, { bottom: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-plus" data-v-6a46b891${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-plus" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: openDonate,
        "aria-label": "Donate",
        class: "cursor-pointer text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Donate `);
          } else {
            return [
              createTextVNode(" Donate ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: openVolunteer,
        "aria-label": "Volunteer",
        class: "hidden lg:block cursor-pointer text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Volunteer `);
          } else {
            return [
              createTextVNode(" Volunteer ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, mergeProps({
        onClick: openLinktree,
        "aria-label": "Linktree",
        class: "text-white cursor-pointer"
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, `Get involved!`)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-link" style="${ssrRenderStyle({ "font-size": "1rem", "color": "var(--white)" })}" data-v-6a46b891${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                class: "pi pi-link",
                style: { "font-size": "1rem", "color": "var(--white)" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main class="flex-1 min-h-0" data-v-6a46b891><div class="h-full overflow-y-auto p-4 scroll-smooth pb-4" data-v-6a46b891><div class="max-w-4xl mx-auto space-y-6" data-v-6a46b891>`);
      if (unref(messages).length === 0) {
        _push(`<div class="text-center py-12" data-v-6a46b891><h1 class="text-white text-2xl mb-8" data-v-6a46b891> Ready to Ciatt when you are. </h1><div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto" data-v-6a46b891>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => handleSendMessage("What are your thoughts on abortion?"),
          class: "p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium text-sm" data-v-6a46b891${_scopeId}>👩 Ask about abortion</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium text-sm" }, "👩 Ask about abortion")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => handleSendMessage("Should the military take over our cities?"),
          class: "p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium text-sm" data-v-6a46b891${_scopeId}> 🪖 Should the military take over our cities? </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium text-sm" }, " 🪖 Should the military take over our cities? ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => handleSendMessage("Is it ok to be gay?"),
          class: "p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium text-sm" data-v-6a46b891${_scopeId}>🌈 Is it ok to be gay?</div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium text-sm" }, "🌈 Is it ok to be gay?")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => handleSendMessage("How do we lower crime in New Jersey?"),
          class: "p-4 text-white bg-gray-800 text-left transition-colors border-1 border-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="font-medium text-sm" data-v-6a46b891${_scopeId}> 🚔 How do we lower crime in New Jersey? </div>`);
            } else {
              return [
                createVNode("div", { class: "font-medium text-sm" }, " 🚔 How do we lower crime in New Jersey? ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(messages), (message) => {
        _push(ssrRenderComponent(_component_ChatMessage, {
          key: message.id,
          message
        }, null, _parent));
      });
      _push(`<!--]-->`);
      if (unref(isTyping)) {
        _push(ssrRenderComponent(_component_TypingIndicator, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="h-32" data-v-6a46b891></div></div></div></main>`);
      _push(ssrRenderComponent(_component_ChatInput, {
        onSend: handleSendMessage,
        disabled: unref(isTyping)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue2.mjs.map
