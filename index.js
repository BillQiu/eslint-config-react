// http://eslint.org/docs/user-guide/configuring

module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true, // strict mode
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    rules: {
        "indent": ["error", 4],
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
        "no-multi-spaces": [2, {
            "exceptions": {
                "VariableDeclarator": true,
                "Property": true,
                "BinaryExpression": true
            },
            "ignoreEOLComments": true
        }],
        "key-spacing": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/self-closing-comp": ["error", {
            "component": false,
            "html": true
        }],
        "react/no-did-mount-set-state": 1,
        "no-unused-expressions": 0,
        "react/sort-comp": 0,
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "ignore",
            "asyncArrow": "always"
        }],
        "no-underscore-dangle": 0,
        "prefer-const": 1,
        "no-unused-vars": 1,
        "no-restricted-syntax": 0,
        "prefer-arrow-callback": 0,
        "arrow-body-style": 0,
        "no-else-return": 0,
        "max-len": [2, 120],
        "consistent-return": 0,
        "jsx-a11y/alt-text": 1,
        "arrow-parens": 0,
        "class-methods-use-this": 0,
        "react/no-array-index-key": 1,
        "no-undef": 0,
        "no-prototype-builtins": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-curly-spacing": { "when": "never", "children": true }
    }
}
