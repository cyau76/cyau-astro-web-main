// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sitemap from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://cyau76.com",
	integrations: [mdx(), sitemap(),react()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
