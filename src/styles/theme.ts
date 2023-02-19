import { extendTheme } from 'native-base';
import colors, { Color } from './colors';
import typography from './typography';
type CustomThemeType = typeof ThemeConfig;
declare module 'native-base' {
  type ICustomTheme = CustomThemeType
}


const ThemeConfig = extendTheme({
    components: {
        Text: {
            baseStyle: () => ({
                color: 'black',
                _dark: {
                    color: 'white'
                },
                fontSize: typography.md,
                fontWeight: typography.regular,
                letterSpacing: 0.15
            })
        },
        Input: {
            baseStyle: {
                autoCapitalize: 'none',
                _light: {
                    placeholderTextColor: colors.grey,
                    color: 'white',
                    borderColor: 'transparent',
                    fontSize: 16,
                    _focus: {
                        bg: 'transparent',
                        selectionColor: colors.primary,
                        autoCapitalize: 'none'
                    }
                }
            }
        },
        Toast: {
            baseStyle: ({ color }: { color: Color }) => ({
                bg: color || colors.error,
                _title: {
                    color: 'white'
                },
                _description: {
                    color: 'white'
                }
            })
        },
        Skeleton: {
            baseStyle: {
                startColor: colors.primaryBg,
                endColor: colors.secondaryBg
            }
        },
        ActionsheetContent: {
            baseStyle: {
                _light: {
                    bg: colors.secondaryBg
                }
            }
        },
        ActionsheetItem: {
            baseStyle: {
                width: '100%',
                justifyContent: 'space-between',
                _text: {
                    fontSize: typography.md,
                    fontWeight: typography.regular,
                    letterSpacing: 0.1
                },
                _light: {
                    bg: colors.secondaryBg,
                    _icon: {
                        color: colors.white
                    },
                    _text: {
                        color: colors.white
                    },
                    _pressed: {
                        bg: colors.opacityGrey
                    }
                }
            }
        }
    },
    fontSizes: {
        '2xs': 8,
        xs: typography.xs,
        sm: typography.sm,
        md: typography.md,
        lg: typography.lg,
        xl: typography.lgg,
        '2xl': typography.xl,
        '3xl': typography.xxl,
        '4xl': typography.xxxl,
        '5xl': typography.superxl,
        '6xl': 40,
        '7xl': 45,
        '8xl': 50,
        '9xl': 55,
        'subheader': typography.subheader,
        'header': typography.header
    },
    fontWeights: {
        thin: typography.thin,
        semi_thin: typography.semi_thin,
        regular: typography.regular,
        semi_bold: typography.semi_bold,
        bold: typography.bold
    },
    shadows: {
        noColor: {
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.15,
            shadowRadius: 15,
            elevation: 1
        },
        black: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.15,
            shadowRadius: 15,
            elevation: 1
        },
        grey: {
            shadowColor: 'grey',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.15,
            shadowRadius: 15,
            elevation: 1
        },
        white: {
            shadowColor: 'white',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.15,
            shadowRadius: 15,
            elevation: 1
        }
    },
    letterSpacings: {
        xs: 0.25,
        sm: 0.5,
        md: 0.75,
        lg: 1,
        xl: 1.1,
        '2xl': 1.2
    },
    radii: {
        none: 0,
        xs: 5,
        sm: 10,
        md: 15,
        lg: 20,
        xl: 25,
        '2xl': 30,
        full: 100
    },
    space: {
        '0': 0,
        '1': 2.5,
        '2': 5,
        '3': 10,
        '4': 15,
        '5': 20,
        '6': 25,
        '7': 30,
        '8': 40,
        '9': 50,
        '10': 60,
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '1/3': '33.333333%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '60%',
        '2/3': '66.666667%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
        'full': '100%'
    }
});

export default ThemeConfig;
