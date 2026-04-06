import type { Config } from "@react-router/dev/config";
import { env } from "process";

export default {
  ssr: false, // disable runtime server rendering
  prerender: true, // pre-render all static routes
} satisfies Config;
