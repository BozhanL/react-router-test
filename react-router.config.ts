import type { Config } from "@react-router/dev/config";
import { env } from "process";

export default {
  ssr: false, // disable runtime server rendering
  prerender: true, // pre-render all static routes
  // Basename must be a URL pathname (e.g. "/" or "/app/").
  // Use Vite `base: "./"` for relative static asset output.
  basename: env.BASE_URL || "/",
} satisfies Config;
