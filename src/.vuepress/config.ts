import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "LC",
      description: "public content",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "LC",
      description: "public content.",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
