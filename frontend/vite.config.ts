import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic',
		}),
	],
	test: {
		environment: 'jsdom',
	},
} as UserConfig);
