import styled, { css } from "styled-components";
import { pxToRem } from "../../lib/functions/pxToRem";
import { fontsFamilies } from "../layout/GlobalStyle";
import media from "../layout/Mediaqueries";

export const ProjectTitleStyle = css`
  font-family: ${fontsFamilies.bebasNeueRegular};
  letter-spacing: 0.03em;
  font-weight: inherit;
  font-size: ${pxToRem(32)};
  ${media.tablet} {
    font-size: ${pxToRem(48)};
  }
  ${media.laptop} {
    font-size: ${pxToRem(64)};
  }
  ${media.desktop} {
    font-size: ${pxToRem(72)};
  }
`;

export const Heading01Style = css`
  font-family: ${fontsFamilies.bebasNeueRegular};
  font-size: ${pxToRem(40)};
  letter-spacing: 0.03em;
  font-weight: inherit;

  ${media.laptop} {
    font-size: ${pxToRem(56)};
  }

  ${media.desktop} {
    font-size: ${pxToRem(64)};
  }
`;

export const InterTitleStyle = css`
  font-family: ${fontsFamilies.bebasNeueRegular};
  font-size: ${pxToRem(20)};
  font-weight: inherit;
`;

export const ParagraphBigStyle = css`
  font-family: ${fontsFamilies.oldStandardRegular};
  font-size: ${pxToRem(24)};
`;

export const ParagraphStyle = css`
  font-family: ${fontsFamilies.oldStandardRegular};
  font-size: ${pxToRem(18)};
`;
