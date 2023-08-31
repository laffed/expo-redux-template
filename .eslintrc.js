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
  plugins: ['react', 'react-hooks', '@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
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
    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/require-description': 2,
    'newline-before-return': 2,
    'eol-last': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'object-property-newline': [2],
    "object-curly-newline": [2, {
      "ObjectExpression": {
        "minProperties": 1,
        'multiline': true,
        'consistent': true
      },
      "ObjectPattern": {
        "multiline": true,
        'consistent': true
      },
      "ImportDeclaration": {
        "multiline": true,
        'consistent': true,
        "minProperties": 3
      },
      "ExportDeclaration": {
        "multiline": true,
        'consistent': true,
        "minProperties": 3
      }
    }],
    'space-in-parens': [2, 'never'],
    'max-len': [
      2,
      {
        'code': 120,
        'tabWidth': 2,
        'ignoreStrings': true,
        'ignoreTrailingComments': true,
        'ignoreTemplateLiterals': true,
      }
    ],
    'no-trailing-spaces': 2,
    'no-multi-spaces': [2],
    'no-console': [2],
    'multiline-comment-style': 'off',
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-dangle': [2, { 'objects': 'always-multiline' }],
    'semi': [2, 'always'],
    'indent': [2, 2, {
      "SwitchCase": 1
    }],
    'quotes': [2, 'single'],
    'keyword-spacing': [2, { 'before': true }],
    'space-before-blocks': [2,
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always',
      }
    ],
    'import/order': [
      2,
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
    'import/no-unresolved': 2,
    'import/newline-after-import': [2, { 'count': 2 }],
    'import/namespace': [2, { 'allowComputed': true }],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [2, {
      'component': true,
      'html': true,
    }],
    'react/jsx-indent': [2, 2, { 'indentLogicalExpressions': true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/display-name': ['off'],
    'react/jsx-tag-spacing': [2, {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    'react/jsx-max-props-per-line': [2, { 'maximum': 1 }],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-wrap-multilines': [2, {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
    'react/jsx-one-expression-per-line': [2, {
      'allow': 'literal',
    }],
    'react/jsx-curly-spacing': [2, {
      'when': 'always', 'spacing': {
        'objectLiterals': 'never',
      }
    }],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    '@typescript-eslint/ban-ts-comment': [2, {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': 'allow-with-description',
      'minimumDescriptionLength': 10
    }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/consistent-type-assertions': [2, {
      'assertionStyle': 'never'
    }
    ],
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
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will', 'does']
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
     '@typescript-eslint/no-misused-promises': [2, {
      'checksVoidReturn': false
    }],
    '@typescript-eslint/no-confusing-void-expression': 2,
    '@typescript-eslint/no-unsafe-assignment': 0,
    'no-restricted-imports': [
      2, {
        'paths': [
          {
            'name': 'react',
            'importNames': ['default'],
            'message': 'No default React import.'
          },
          {
            'name': 'react-redux',
            'importNames': ['useDispatch'],
            'message': 'Please use useAppDispatch from @hooks/index'
          },
          {
            'name': 'lodash',
            'message': 'Please import [module] from lodash/[module]'
          },
        ],
      }
    ],
  },
  overrides: [
    {
      files: ["**.test.**"],
      plugins: ["jest"],
      extends: ["plugin:jest/all"],
    }
  ]
};
