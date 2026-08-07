import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx}'],
        extends: [
            js.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        plugins: { react },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        rules: {
            // Without these, identifiers referenced only from JSX (e.g. `motion`)
            // are reported as unused.
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'no-unused-vars': [
                'error',
                { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^[A-Z_]' },
            ],
        },
    },
    {
        // Config + build scripts run in Node, not the browser.
        files: ['vite.config.js', 'eslint.config.js', 'scripts/**/*.{js,mjs}'],
        languageOptions: { globals: globals.node },
    },
])
