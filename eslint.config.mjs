import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        ...js.configs.recommended,
        languageOptions: {
            ...js.configs.recommended.languageOptions,
            globals: {
                ...js.configs.recommended.languageOptions?.globals,
                window: 'readonly',
                document: 'readonly',
                KeyboardEvent: 'readonly'
            }
        }
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true }
            }
        },
        plugins: { '@typescript-eslint': tseslint },
        rules: {
            ...tseslint.configs.recommended.rules
        }
    },
    {
        plugins: { react, 'react-hooks': reactHooks },
        rules: {
            ...react.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off'
        },
        settings: {
            react: { version: 'detect' }
        }
    }
];
