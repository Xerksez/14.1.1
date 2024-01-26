// .eslintrc.js
module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
        allowImportExportEverywhere: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
