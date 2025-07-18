export type SiteMode = "live" | "construction" | "maintenance";

export const SITE_MODE: SiteMode = 
(import.meta.env.VITE_SITE_MODE as SiteMode) || "live";