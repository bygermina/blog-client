import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr({ exportAsDefault: true }), react()],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        IS_DEV: JSON.stringify(true),
        API_URL: JSON.stringify('http://localhost:3050'),
        PROJECT: JSON.stringify('frontend'),
    },
});
