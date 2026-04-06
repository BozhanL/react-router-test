import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("test", "routes/test.tsx"),
  route("test1", "routes/test2.tsx"),
] satisfies RouteConfig;
