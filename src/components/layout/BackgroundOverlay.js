import styled from "styled-components";
import { colors } from "../primitives/colors";
import { gridColSizes, gridMargins } from "./Grid";
import { pxToRem } from "../../lib/functions/pxToRem";
import media from "./Mediaqueries";

export default function BackgroundOverlay() {
  return (
    <>
      <BackgroundOverlayContainer></BackgroundOverlayContainer>
    </>
  );
}

const BackgroundOverlayContainer = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #ffffff 0%, rgba(0, 0, 0, 0.37) 100%);
  mix-blend-mode: soft-light;
  pointer-events: none;

  &:after {
    position: absolute;
    display: block;
    content: "";
    inset: 0;
    background: radial-gradient(
      83.4% 83.4% at 50% 50%,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    mix-blend-mode: overlay;
    opacity: 0.6;
  }
  &:before {
    position: absolute;
    display: block;
    content: "";
    background-color: ${colors.White};
    width: calc(15 * ${gridColSizes.desktop});
    height: calc(100vh - ${pxToRem(48)});
    top: 50%;
    left: ${gridMargins.mobile};
    transform: translateY(-50%);

    ${media.tablet} {
      left: ${gridMargins.tablet};
    }
    ${media.laptop} {
      left: ${gridMargins.laptop};
    }
    ${media.desktop} {
      left: ${gridMargins.desktop};
    }
    ${media.max} {
      left: ${gridMargins.max};
    }
  }
`;
