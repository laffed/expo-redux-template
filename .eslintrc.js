module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2019,
    'sourceType': 'module',
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': 'detect',
    },
    'import/ignore': [
      'node_modules'
    ],
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'src/'],
      },
    },
  },
  'plugins': [
    'react-hooks',
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:jest/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  'ignorePatterns': [
    'node_modules/',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    '**/__mocks__/**'
  ],
  'rules': {
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
    'import/newline-after-import': ['error', { 'count': 2 }],
    'import/namespace': [2, { 'allowComputed': true }],
    'no-undef': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxEOF': 0,
        'maxBOF': 0,
      }
    ],
    'eol-last': ['error', 'always'],
    'newline-before-return': 'error',
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
    'object-shorthand': [2, 'always'],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': ['error'],
    'no-console': [2],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', { 'objects': 'always-multiline' }],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'object-curly-newline': ['error', {
      'ImportDeclaration': { 'multiline': true, 'minProperties': 4 },
      'ExportDeclaration': { 'multiline': true, 'minProperties': 2 },
    }],
    'eqeqeq': ['error'],
    'keyword-spacing': ['error', { 'before': true }],
    'space-before-blocks': ['error',
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always',
      }
    ],


    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true,
    }],
    'react/jsx-indent': [2, 2, { 'indentLogicalExpressions': true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/display-name': ['off'],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
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
    'react/jsx-curly-spacing' : ['error', { 'when': 'always', 'spacing': {
      'objectLiterals': 'never',
    } }],


    'jest/no-disabled-tests': 'warn',
    'jest/expect-expect': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/no-test-return-statement': 'off',
    'jest/no-hooks': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/array-type': [2, { 'default': 'array-simple' }],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/naming-convention': [
          'error',
          {
            'selector': 'interface',
            'format': ['PascalCase'],
            'custom': {
              'regex': '^I[A-Z]',
              'match': true,
            },
          }
        ],
      },
    }
  ],
  'globals': {
    '__DEV__': 'readonly',
  },
};
