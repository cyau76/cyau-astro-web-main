// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";


import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://cyau76.com",
	redirects: {
		"/current-work/26-spring-diffusions": "/current-work/26-winter-diffusions",
		"/current-work/26-spring-diffusions/2026-spring-diffusions-mtp-tech-team-availability-form":
			"/current-work/26-winter-diffusions/2026-winter-diffusions-mtp-tech-team-availability-form",
		"/current-work/26-spring-diffusions/26-spring-diffusions-input-list-q-and-a":
			"/current-work/26-winter-diffusions/26-winter-diffusions-input-list-q-and-a",
	},
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
