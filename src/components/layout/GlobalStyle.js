import { createGlobalStyle } from "styled-components";
import { colors } from "../primitives/colors";
import { pxToRem } from "../../lib/functions/pxToRem";
import { gridColSizes } from "./Grid";

const GlobalStyle = createGlobalStyle`

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin and padding
*/
* {
  margin: 0;
  padding: 0;
  cursor: none;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
  body {
    background-color: ${({ theme }) => theme.BodyBackground};
    position: relative;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select, a {
  font: inherit;
  text-decoration: none;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  font: inherit;
  overflow-wrap: break-word;
  line-height: initial;
}

/*
  9. Remove List decoration
*/

li {
  list-style: none;
}


button {
  background: none;
  border: none;
  box-shadow: none;
}  
html {
  font-size: 8px;
  scroll-behavior: smooth;
}


`;

export const fontsFamilies = {
  oldStandardRegular: "'Old Standard TT'",
  bebasNeueRegular: "'Bebas Neue'",
};

export default GlobalStyle;
