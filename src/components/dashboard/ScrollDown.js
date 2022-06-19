import styled from "styled-components";
import { IcArrow } from "../primitives/iconsRaw";
import { pxToRem } from "../../lib/functions/pxToRem";
import { colors } from "../primitives/colors";

export default function ScrollDown() {
  return (
    <>
      <ScrollDownWrapper>
        <ScrollDownLabel>Discover more projects</ScrollDownLabel>
        <ScrollDownIconWrapper>
          <IcArrow />
        </ScrollDownIconWrapper>
      </ScrollDownWrapper>
    </>
  );
}

const ScrollDownWrapper = styled.div``;

const ScrollDownLabel = styled.p``;

const ScrollDownIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: 50%;

  &:after {
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.White};
    border-radius: 50%;
    opacity: 0;
  }

  svg {
    max-width: ${pxToRem(16)};
    max-height: ${pxToRem(16)};
    path {
      fill: ${colors.White};
    }
  }

  &:hover {
    &:after {
      animation: pulseRing 0.8s linear;
    }
    svg {
      -webkit-animation: jello-horizontal 0.9s both;
      animation: jello-horizontal 0.9s both;
    }
  }

  @keyframes jello-horizontal {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes pulseRing {
    20% {
      width: ${pxToRem(32)};
      height: ${pxToRem(32)};
      opacity: 0;
    }
    80% {
      width: ${pxToRem(64)};
      height: ${pxToRem(64)};
      opacity: 0.3;
    }
    100% {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
`;
