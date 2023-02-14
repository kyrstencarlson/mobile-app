// use as const assertion for colors so typescript treats them as readonly
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions

const primary = '#F2C438' as const;
const disabled = '#F2C438c2' as const;
const white = 'white' as const;
const black = 'black' as const;
const input = '#e4e4e4' as const;
const grey = '#9BA4A5' as const;
const lightGrey = '#4E5357BA' as const;
const lightYellow = '#9d8633' as const;
const error = '#d9534f' as const;
const success = '#80BD6D' as const;
const info = '#2D718F' as const;
const offWhite = '#F7F9FC' as const;
const warning = '#FFC759' as const;
const background = 'white' as const;
const text = 'white' as const;
const insideText = '#20272C' as const;
const primaryBg = '#20272C' as const;
const secondaryBg = '#2D343A' as const;
const tertiaryBg = '#46505d' as const;
const borderColor = '#464e54' as const;
const gold = '#A88220' as const;
const opaqueGold = '#a881202a' as const;
const chartBlue = '#4198DA' as const;
const opacityGrey = '#17222935' as const;
const transparent = 'transparent' as const;
const green = '#2E7B2E' as const;
const orange = '#F2C438' as const;
const red = '#B24646' as const;
const fbBlue = '#1877F2' as const;
const opacityYellow = '#3E3E33' as const;
const mediumGrey = '#383d43' as const;

export type Color = 'primary'
    | 'disabled'
    | 'white'
    | 'black'
    | 'input'
    | 'grey'
    | 'lightGrey'
    | 'lightYellow'
    | 'error'
    | 'success'
    | 'info'
    | 'offWhite'
    | 'warning'
    | 'background'
    | 'text'
    | 'insideText'
    | 'primaryBg'
    | 'secondaryBg'
    | 'tertiaryBg'
    | 'borderColor'
    | 'gold'
    | 'chartBlue'
    | 'orange'
    | 'green'
    | 'red'
    | 'transparent'
    | 'fbBlue'
    | 'opacityYellow'
    | 'mediumGrey';

export default {
    primary,
    disabled,
    white,
    black,
    input,
    grey,
    lightGrey,
    lightYellow,
    error,
    success,
    info,
    offWhite,
    warning,
    background,
    text,
    insideText,
    primaryBg,
    secondaryBg,
    tertiaryBg,
    borderColor,
    gold,
    opaqueGold,
    chartBlue,
    opacityGrey,
    transparent,
    orange,
    green,
    red,
    fbBlue,
    opacityYellow,
    mediumGrey
};
