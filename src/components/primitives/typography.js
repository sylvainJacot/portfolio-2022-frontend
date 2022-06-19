import styled from "styled-components";
import { pxToRem } from "../../lib/functions/pxToRem";
import { fontsFamilies } from "../layout/GlobalStyle";

export const ProjectTitle = styled.h2`
  font-size: ${pxToRem(40)};
`;

export const Heading01 = styled.h1`
  font-family: ${fontsFamilies.bebasNeueRegular};
  font-size: ${pxToRem(48)};
`;

export const ParagraphBig = styled.p`
  font-family: ${fontsFamilies.oldStandardRegular};
  font-size: ${pxToRem(24)};
`;
