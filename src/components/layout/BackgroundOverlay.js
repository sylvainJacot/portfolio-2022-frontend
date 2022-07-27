import styled from "styled-components";
import { colors } from "../primitives/colors";
import { gridColSizes, gridMargins } from "./Grid";
import { pxToRem } from "../../lib/functions/pxToRem";
import media from "./Mediaqueries";
import { useContext } from "react";
import { BodyContext } from "../../context/body-context";
import { transitionDefault } from "../animations/transitions";

export default function BackgroundOverlay() {
  const { bodyColor, setBodyColor } = useContext(BodyContext);

  return (
    <>
      <LinearGradient />
      <BackgroundOverlayContainer
        bodyColor={bodyColor}
      ></BackgroundOverlayContainer>
    </>
  );
}

const BackgroundOverlayContainer = styled.div`
  position: fixed;
  inset: 0;
  background: ${(props) => props.bodyColor};
  pointer-events: none;
  z-index: -1;
  transition: all ${transitionDefault};

  &:after {
    position: absolute;
    display: block;
    content: "";
    inset: 0;
    background: radial-gradient(
      83.27% 83.27% at 50% 50%,
      #d9d9d9 0%,
      rgba(217, 217, 217, 0) 100%
    );
    opacity: 0.3;
  }
  &:before {
    position: absolute;
    display: block;
    content: "";
    background-color: ${({ theme }) => theme.overlay};

    height: calc(100vh - ${pxToRem(48)});
    top: 50%;
    left: ${gridMargins.mobile};
    transform: translateY(-50%);
    opacity: 0.05;

    ${media.tablet} {
      left: ${gridMargins.tablet};
    }
    ${media.laptop} {
      left: ${gridMargins.laptop};
      width: calc(15 * ${gridColSizes.laptop});
    }
    ${media.desktop} {
      left: ${gridMargins.desktop};
      width: calc(
        13 * ${gridColSizes.desktop} + calc(${gridColSizes.desktop} / 2)
      );
    }
    ${media.max} {
      left: ${gridMargins.max};
      width: calc(13 * ${gridColSizes.max} + calc(${gridColSizes.max} / 2));
    }
  }
`;

const LinearGradient = styled.div`
  position: absolute;
  display: block;
  content: "";
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, #ffffff 0%, rgba(0, 0, 0, 1) 100%);
  mix-blend-mode: overlay;
  opacity: 0.6;
  pointer-events: none;
  z-index: -1;
`;
