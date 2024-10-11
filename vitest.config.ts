import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["src/vitest-setup.ts"],
    globals: true,
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
    },
  },
});
