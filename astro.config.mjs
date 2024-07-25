import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  output: "server",
  integrations: [db(), tailwind()],
  adapter: node({
    mode: "standalone"
  })
});