import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@services": path.resolve(__dirname, "src/services"),
			"@models": path.resolve(__dirname, "src/models"),
		},
	},
	server: {
		port: 3000,
		host: "0.0.0.0",
		strictPort: true,
	},
	build: {
		outDir: "dist",
		sourcemap: true,
	},
});
