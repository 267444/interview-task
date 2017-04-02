module.exports = {
    parserOptions: {
        ecmaVersion: 6,
    },
    extends: "eslint:recommended",
    env: {
        browser: true,
        jasmine: true,
        commonjs: true,
    },
    globals: {
        inject: false
    },
    rules: {
        'no-console': [2, { allow: ["warn", "error"] }],
        'quotes': [2, 'single'],
        'eqeqeq': 2,
        'no-multiple-empty-lines': [2, { max: 1 }],
        'semi': 2
    }
};
