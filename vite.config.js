import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [
            react(),
            VitePWA({
                includeAssets: [
                    'assets/images/icons/favicon.ico',
                    'assets/images/icons/apple-touch-icon.png',
                    'assets/images/icons/favicon.svg',
                ],
                manifest: {
                    name: 'Legalistas App clientes',
                    short_name: 'Legalistas',
                    description: 'Sistema de gestion de clientes de legalistas',
                    theme_color: '#ffffff',
                    icons: [
                        {
                            src: 'assets/images/icons/android-chrome-192x192.png',
                            sizes: '192x192',
                            type: 'image/png',
                        },
                        {
                            src: 'assets/images/icons/android-chrome-512x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                        },
                    ],
                },
            }),
        ],
        base: 'https://nextweb.com.ar',
        build: {
            target: 'esnext',
            assetsInlineLimit: 0,
            assetsDir: 'assets/',
            outDir: './build/',
            sourcemap: true,
            minify: 'esbuild',
            rollupOptions: {
                output: {
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: ({ name }) => {
                        if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                            return 'assets/images/[name]-[hash][extname]'
                        }

                        if (/\.css$/.test(name ?? '')) {
                            return 'assets/css/[name]-[hash][extname]'
                        }

                        // default value
                        // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                        return 'assets/[name]-[hash][extname]'
                    },
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return 'main'
                        }
                    },
                },
            },
            assetsInclude: ['src/assets/**/*'],
        },
        server: {
            port: 3000, // Puerto para el servidor de desarrollo
        },
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
    }
})
