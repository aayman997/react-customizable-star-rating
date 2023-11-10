/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteTsconfigPaths(),
		svgr({
			include: '**/*.svg?react',
		}),

	],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['./**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		setupFiles: ['./vitest.setup.ts'],
	},
});
