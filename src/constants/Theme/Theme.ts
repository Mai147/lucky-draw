import { chessmazeThemeStylesObject } from "./ChessmazeTheme";
import { halloweenThemeStylesObject } from "./HalloweenTheme";
import { pinkThemeStylesObject } from "./PinkTheme";
import { tetThemeStylesObject } from "./TetTheme";

export type ThemeStylesObject = {
    appHeader?: string;
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
    chessmaze: ThemeStylesObject;
    tet: ThemeStylesObject;
};

export enum ThemeName {
    PINK = "pink",
    HALLOWEEN = "halloween",
    CHESSMAZE = "chessmaze",
    TET = "tet"
}

export const themeStyles: ThemeStyles = {
    pink: pinkThemeStylesObject,
    halloween: halloweenThemeStylesObject,
    chessmaze: chessmazeThemeStylesObject,
    tet: tetThemeStylesObject
};