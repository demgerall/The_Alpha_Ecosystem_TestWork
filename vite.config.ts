import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig({
    base: '/The_Alpha_Ecosystem_TestWork/',
    plugins: [
        react(),
        svgr({
            include: '**/*.svg',
        }),
    ],
    server: {
        open: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
            },
        },
    },
});