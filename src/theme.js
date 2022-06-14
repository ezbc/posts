const colors = {
    primary: 'rgba(238,244,252,1)',
    secondary: 'rgba(218,72,116,1)',
    dark: 'rgba(80,33,45,1)',
    darkStrong: 'rgba(74,74,74,1)',
    special: 'rgba(218,72,116,1)',
    light: 'rgba(247,174,189,1)',
};

const theme = {
    colors,
    elements: {
        outline: {
            color: colors.light,
        },
        background: {
            color: colors.subtle,
        },
        button: {
            background: {
                color: colors.special,
            },
            text: {
                color: colors.primary,
                weight: 500,
            },
        },
        text: {
            size: '1rem',
            color: colors.dark,
            family: 'Montserrat',
        },
        h1: {
            size: '1.5rem',
            color: colors.darkStrong,
        },
        h2: {
            size: '1.2rem',
            color: colors.darkStrong,
        },
    },
};

export { colors };
export default theme;
