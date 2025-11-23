import { META_THEME_COLORS, siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: siteConfig.url,
    display: "standalone",
    background_color: META_THEME_COLORS.dark,
    theme_color: META_THEME_COLORS.light,
  };
}
