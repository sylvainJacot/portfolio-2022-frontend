import { colors } from "../primitives/colors";

export const lightTheme = {
  body: colors.White,
  text: colors.Primary,
  textNeg: colors.White,
  overlay: colors.Primary,

  Text: colors.Primary,
  TextNeg: colors.White,
  TextStrong: colors.Secondary,
  BodyBackground: colors.White,
  BlockBackground: colors.Primary,

  binary: 1,
};

export const darkTheme = {
  body: colors.Primary,
  text: colors.White,
  textNeg: colors.Primary,

  Text: colors.White,
  TextNeg: colors.Primary,
  TextStrong: colors.Aqua,
  BodyBackground: colors.Primary,
  BlockBackground: colors.Tertiary,
  overlay: colors.White,

  binary: 0,
};
