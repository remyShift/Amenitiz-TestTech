import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		react({
			jsxRuntime: 'automatic',
		}),
	],
	server: {
		host: '0.0.0.0',
		port: 5173,
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/setupTests.ts'],
	},
} as UserConfig);
