import { createGlobalStyle } from 'styled-components';
import { colors } from '../primitives/colors';
import { pxToRem } from '../../lib/functions/pxToRem';
import { gridColSizes } from './Grid';
 
const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
  body {
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    position: relative;
    transition: all 0.50s linear;

    ${'' /* &:after {
      display: block;
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      box-shadow:0px 0px 0px ${pxToRem(16)} white inset;
      pointer-events: none;
    }
    &:before {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      left: ${pxToRem(16)};
      position: fixed;
      width: calc(${gridColSizes.mobile} * 9);
      background-color: ${colors.Primary};
      height: 100vh;
      opacity: 0.5;
      z-index: -1;
    } */}
  }
  html {
    font-size: 8px;
  }
`;
 
export default GlobalStyle;