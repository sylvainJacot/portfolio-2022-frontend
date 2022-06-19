import { createGlobalStyle } from "styled-components";
import { colors } from "../primitives/colors";
import { pxToRem } from "../../lib/functions/pxToRem";
import { gridColSizes } from "./Grid";

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    position: relative;
    transition: all 0.50s linear;

  }
  html {
    font-size: 8px;
  }


  @font-face {
    font-family: 'Old Standard TT';
    src: url('/fonts/OldStandard/OldStandardTT-Regular.woff2') format('woff2'),
        url('/fonts/OldStandard/OldStandardTT-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Bebas Neue';
    src: url('/fonts/BebasNeue/BebasNeue-Regular.woff2') format('woff2'),
        url('/fonts/BebasNeue/BebasNeue-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`;

export const fontsFamilies = {
  oldStandardRegular: "'Old Standard TT'",
  bebasNeueRegular: "'Bebas Neue'",
};

export default GlobalStyle;
