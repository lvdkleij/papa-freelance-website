import tsParser from '@typescript-eslint/parser'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
   eslintConfigPrettier,
   {
      languageOptions: {
         parser: tsParser,
         parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
         },
      },
      plugins: {
         '@typescript-eslint': tsEslintPlugin,
         'eslint-plugin-prettier': eslintPluginPrettier,
      },
      ignores: [],
   },
]
