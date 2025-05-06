import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("team", "routes/team.tsx"),
    route("contact", "routes/contact_us.tsx")
] satisfies RouteConfig;
