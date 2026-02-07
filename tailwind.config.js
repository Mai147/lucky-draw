const themeList = [
    { themeName: 'pink' },
    { themeName: 'halloween', url: '../public/images/7410.jpg' },
    { themeName: 'chessmaze', url: '../public/images/chessmaze.jpg' },
    { themeName: 'tet', url: '../public/images/tet2026.png' },
];

const buildBackgroundImage = (themeName, options) => {
    const url = options?.url;
    let skinClass = `linear-gradient(to bottom right, var(--color-bg-from-${themeName}), var(--color-bg-to-${themeName}))`;
    if (url) {
        skinClass += `, url('${url}')`
    }
    return {
        [`skin-${themeName}`]: skinClass,
    }
}

const buildBackgroundColor = (themeName) => {
    return {
        [`input-${themeName}`]: `var(--color-input-background-${themeName})`,
        [`box-${themeName}`]: `var(--color-box-bg-${themeName})`,
        [`box-inner-${themeName}`]: `var(--color-box-border-inner-${themeName})`,
        [`box-outter-${themeName}`]: `var(--color-box-border-outter-${themeName})`,
        [`button-hover-${themeName}`]:
            `var(--color-button-background-hover-${themeName})`,
        [`button-${themeName}`]: `var(--color-button-background-${themeName})`,
    }
}

const buildTextColor = (themeName) => {
    return {
        [`header-icon-${themeName}`]: `var(--color-header-icon-${themeName})`,
        [`header-${themeName}`]: `var(--color-header-text-${themeName})`,
        [`skin-${themeName}`]: `var(--color-text-${themeName})`,
        [`input-${themeName}`]: `var(--color-input-text-${themeName})`,
        [`box-${themeName}`]: `var(--color-box-text-${themeName})`,
    }
}

const buildBorderColor = (themeName) => {
    return {
        [`input-${themeName}`]: `var(--color-input-border-${themeName})`,
        [`box-inner-${themeName}`]: `var(--color-box-border-inner-${themeName})`,
        [`box-outter-${themeName}`]: `var(--color-box-border-outter-${themeName})`,
    }
}

const backgroundImageObject = themeList.reduce((acc, theme) => {
    return { ...acc, ...buildBackgroundImage(theme.themeName, { url: theme.url })}
})

const backgroundColorObject = themeList.reduce((acc, theme) => {
    return { ...acc, ...buildBackgroundColor(theme.themeName) };
}, {});

const textColorObject = themeList.reduce((acc, theme) => {
    return { ...acc, ...buildTextColor(theme.themeName) };
}, {});

const borderColorObject = themeList.reduce((acc, theme) => {
    return { ...acc, ...buildBorderColor(theme.themeName) };
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: backgroundImageObject,
            backgroundColor: backgroundColorObject,
            textColor: textColorObject,
            borderColor: borderColorObject
        },
    },
    plugins: [],
};
