module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/ignore': ['node_moduels', 'react-native'],
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'src/']
      },
      'typescript': {

      }
    }
  },
  plugins: ['react-hooks', '@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'coverage/',
    'node_modules/',
    'babel.config.js',
    'jest.config.js',
  ],
  rules: {
    'eqeqeq': 2,
    'newline-before-return': 'error',
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'max-len': [
      'error',
      {
        'code': 120,
        'tabWidth': 2,
        'ignoreStrings': true,
        'ignoreTrailingComments': true,
        'ignoreTemplateLiterals': true,
        'ignorePattern': 'createStandardAction|createSelector',
      }
    ],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': ['error'],
    'no-console': [2],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', { 'objects': 'always-multiline' }],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'keyword-spacing': ['error', { 'before': true }],
    'space-before-blocks': ['error',
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always',
      }
    ],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
      }
    ],
    'import/no-unresolved': 'error',
    'import/newline-after-import': ['error', { 'count': 2 }],
    'import/namespace': [2, { 'allowComputed': true }],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true,
    }],
    'react/jsx-indent': [2, 2, { 'indentLogicalExpressions': true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/display-name': ['off'],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
    'react/jsx-one-expression-per-line': ['error', {
      'allow': 'literal',
    }],
    'react/jsx-curly-spacing': ['error', {
      'when': 'always', 'spacing': {
        'objectLiterals': 'never',
      }
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/naming-convention': [
      2,
      {
        'selector': 'variableLike',
        'format': ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
        'leadingUnderscore': 'allow',
        'filter': {
          'regex': 'Schema',
          'match': false
        }
      },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['StrictPascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
      },
      {
        'selector': 'enum',
        'format': ['StrictPascalCase'],
      },
      {
        'selector': 'enumMember',
        'format': ['UPPER_CASE'],
      }
    ],
    '@typescript-eslint/array-type': [2, {
      'default': 'array-simple'
    }],
    '@typescript-eslint/no-explicit-any': [2, {
      'fixToUnknown': false,
      'ignoreRestArgs': true
    }],
    '@typescript-eslint/strict-boolean-expressions': [2, {
      'allowString': false,
      'allowNumber': false,
      'allowNullableObject': true,
    }],
    '@typescript-eslint/no-unnecessary-type-arguments': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-confusing-void-expression': 2,
    '@typescript-eslint/no-unsafe-assignment': 0,
    'no-restricted-imports': [
      'error', {
        'paths': [
          {
            'name': 'react-redux',
            'importNames': ['useDispatch'],
            'message': 'Please use useAppDispatch from @hooks/index'
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: ["**.test.**"],
      plugins: ["jest"],
      extends: ["plugin:jest/all"],
    }
  ]
};