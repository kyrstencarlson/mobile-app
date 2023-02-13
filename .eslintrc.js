module.exports = {
    root: true,
    extends: ['@react-native-community'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src']
            },
            webpack: {
                config: {
                    resolve: {
                        extensions: ['.js', '.jsx'],
                        alias: {
                            '@screens': 'src/screens',
                            '@components': 'src/components',
                            '@api': 'src/api',
                            '@context': 'src/context',
                            '@assets': 'assets',
                            '@utils': 'src/utils',
                            '@styles': 'src/styles',
                            '@layouts': 'src/layouts'
                        }
                    }
                }
            }
        }
    },
    rules: {
        'prettier/prettier': 0,
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'none'
            }
        ],
        'import/no-webpack-loader-syntax': [0],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'array-bracket-newline': ['error', 'consistent'],
        'block-spacing': ['error', 'always'],
        'brace-style': [
            'error',
            'stroustrup',
            {
                allowSingleLine: true
            }
        ],
        'func-call-spacing': ['error', 'never'],
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'comma-style': ['error', 'last'],
        'eol-last': ['error', 'always'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        indent: [
            'error',
            4,
            {
                ignoredNodes: ['TemplateLiteral'],
                SwitchCase: 1
            }
        ],
        'jsx-quotes': ['warn', 'prefer-single'],
        quotes: ['warn', 'single'],
        'key-spacing': [
            'error',
            {
                beforeColon: false
            }
        ],
        'keyword-spacing': [
            'error',
            {
                overrides: {
                    if: {
                        before: true,
                        after: true
                    },
                    for: {
                        before: true,
                        after: true
                    },
                    while: {
                        before: true,
                        after: true
                    }
                }
            }
        ],
        'line-comment-position': [
            'warn',
            {
                position: 'above'
            }
        ],
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true
            }
        ],
        'lines-between-class-members': ['error', 'always'],
        'max-len': [
            'warn',
            {
                tabWidth: 4,
                code: 150,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'max-lines-per-function': [
            'warn',
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        'max-nested-callbacks': ['warn', 3],
        'max-statements-per-line': [
            'warn',
            {
                max: 3
            }
        ],
        'multiline-ternary': ['warn', 'always-multiline'],
        'new-parens': 'error',
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 3
            }
        ],
        'no-console': 'warn',
        'no-trailing-spaces': 'warn',
        'no-multi-spaces': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'warn',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 1
            }
        ],
        'no-negated-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true
                },
                ObjectPattern: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true
                }
            }
        ],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'error',
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            }
        ],
        semi: ['warn', 'always'],
        'semi-style': ['warn', 'last'],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'arrow-body-style': ['warn', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'no-confusing-arrow': 'error',
        'no-useless-rename': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'yield-star-spacing': ['error', 'after']
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                'implicit-arrow-linebreak': ['error', 'beside']
            }
        },
        {
            files: ['*.test.*', '*.e2e.*'],
            rules: {
                'max-nested-callbacks': 'off'
            }
        }
    ],
    globals: {
        describe: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        it: 'readonly',
        device: 'readonly',
        expect: 'readonly',
        element: 'readonly',
        by: 'readonly',
        waitFor: 'readonly'
    }
};
