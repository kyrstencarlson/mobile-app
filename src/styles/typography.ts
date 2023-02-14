const xs = 10 as const;
const sm = 12 as const;
const md = 14 as const;
const lg = 16 as const;
const lgg = 18 as const;
const xl = 20 as const;
const xxl = 25 as const;
const xxxl = 30 as const;
const superxl = 35 as const;
const subheader = 60 as const;
const header = 70 as const;
const fontHeader = 'Avenir' as const;
const fontBody = 'Avenir' as const;
const thin = '200' as const;
const semi_thin = '400' as const;
const regular = '600' as const;
const semi_bold = '800' as const;
const bold = '900' as const;

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'lgg' | 'xl' | 'xxl' | 'xxxl' | 'header' | 'superxl'
export type FontWeight = 'thin' | 'semi_thin' | 'regular' | 'semi_bold' | 'bold'

export default {
    xs,
    sm,
    md,
    lg,
    lgg,
    xl,
    xxl,
    xxxl,
    superxl,
    subheader,
    header,
    fontHeader,
    fontBody,
    thin,
    semi_thin,
    regular,
    semi_bold,
    bold
};
