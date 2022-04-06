import { createGlobalStyle } from 'styled-components';
import { colors } from '../primitives/colors';
import { pxToRem } from '../../lib/functions/pxToRem';
 
const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
  body {
    background-color: ${colors.Primary};
    color: ${colors.White};
    position: relative;

    &:after {
      display: block;
      content: "";
      position: absolute;
      inset: 0;
      height: 100vh;
      border: ${pxToRem(16)} solid ${colors.Primary};
      pointer-events: none;
    }
  }
  html {
    font-size: 8px;
  }
`;
 
export default GlobalStyle;