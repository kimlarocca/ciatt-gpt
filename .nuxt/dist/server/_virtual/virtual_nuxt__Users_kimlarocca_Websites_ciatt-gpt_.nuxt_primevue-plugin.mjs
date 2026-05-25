import ConfirmationService from "../node_modules/primevue/confirmationservice/index.mjs";
import DialogService from "../node_modules/primevue/dialogservice/index.mjs";
import ToastService from "../node_modules/primevue/toastservice/index.mjs";
import { defineNuxtPlugin, useRuntimeConfig } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import PrimeVue from "../node_modules/_primevue/core/config/index.mjs";
const primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0 = defineNuxtPlugin(({ vueApp }) => {
  var _a;
  const runtimeConfig = useRuntimeConfig();
  const config = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.primevue) ?? {};
  const { usePrimeVue = true, options = {} } = config;
  const pt = {};
  const theme = { theme: options == null ? void 0 : options.theme };
  usePrimeVue && vueApp.use(PrimeVue, { ...options, ...pt, ...theme });
  vueApp.use(ConfirmationService);
  vueApp.use(DialogService);
  vueApp.use(ToastService);
});
export {
  primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0 as default
};
//# sourceMappingURL=virtual_nuxt__Users_kimlarocca_Websites_ciatt-gpt_.nuxt_primevue-plugin.mjs.map
