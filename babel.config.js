module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                cwd: 'babelrc',
                extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
                alias: {
                    '@screens': './src/screens',
                    '@components': './src/components',
                    '@assets': './src/assets',
                    '@utils': './src/utils',
                    '@styles': './src/styles',
                    '@src': './src'
                }
            }
        ],
        // must be the last plugin
        'react-native-reanimated/plugin'
    ]
};
