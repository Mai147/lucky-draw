import { halloweenThemeStylesObject } from "./HalloweenTheme";
import { pinkThemeStylesObject } from "./PinkTheme";

export type ThemeStylesObject = {
    background: string;
    textColor: string;
    headerIconColor: string;
    headerColor: string;
    headerTextShadowColor: string;
    inputBackground: string;
    inputTextColor: string;
    inputBorderColor: string;
    numberBoxBackground: string;
    numberBoxColor: string;
    numberBoxInnerBorder: string;
    numberBoxInnerBackground: string;
    numberBoxOutterBorder: string;
    numberBoxOutterBackground: string;
    numberBoxTextShadow: string;
    numberBoxShadow: string;
    buttonBackground: string;
    buttonBackgroundHover: string;
    animatedBoxBackground: string;
    animatedBoxBorder: string;
};

export type ThemeStyles = {
    pink: ThemeStylesObject;
    halloween: ThemeStylesObject;
};

export const themeStyles: ThemeStyles = {
    pink: pinkThemeStylesObject,
    halloween: halloweenThemeStylesObject,
};
