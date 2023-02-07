import { defineNuxtConfig } from "@nuxt/bridge";
import { resolve } from "path";

interface testingConfig {
  modules: "enabled" | "disabled";
  extendRoutes: "empty" | "undefined" | "full";
}

const config: testingConfig = {
  modules: "disabled",
  extendRoutes: "empty",
};

// Proposed `pages: true` catches situation where `build.createRoutes`
// is not defined, but we still want to extend pages in module

const createRoutes = () => {
  switch (config.extendRoutes) {
    case "empty":
      return [];
    case "undefined":
      return undefined;
    case "full":
      return [
        {
          path: "/",
          component: resolve("pa/index.vue"),
        },
        {
          path: "/pa/1",
          component: resolve("pa/pa/1.vue"),
        },
        {
          path: "/pa/2",
          component: resolve("pa/pa/2.vue"),
        },
      ];
  }
};

const modules = config.modules === "enabled" ? ["./module"] : [];

export default defineNuxtConfig({
  head: {
    title: "Nuxt Starter",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules,

  build: {
    // @ts-ignore
    createRoutes,
  },
});
