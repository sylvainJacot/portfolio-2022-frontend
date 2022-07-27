import styled from "styled-components";
import { IcArrow } from "../primitives/iconsRaw";
import { pxToRem } from "../../lib/functions/pxToRem";
import { colors } from "../primitives/colors";
import { gridColSizes, gridMargins } from "../layout/Grid";
import { InterTitleStyle } from "../primitives/typography";
import media from "../layout/Mediaqueries";
import { useState, useContext } from "react";
import useSound from "use-sound";
import { OverallSoundContext } from "../../context/sound-context";

const soundUrl = "/sounds/moreProjects.mp3";
const soundClickUrl = "/sounds/click.mp3";

export default function ScrollDown() {
  const { overallSound, overallSoundChangeHandler } =
    useContext(OverallSoundContext);

  const [playHover, { stop }] = useSound(soundUrl, {
    soundEnabled: overallSound,
  });
  const [playClick, { stopClick }] = useSound(soundClickUrl, {
    soundEnabled: overallSound,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onEnterScrollDownHanlder = () => {
    setIsHovering(true);
    playHover();
  };

  const onLeaveScrollDownHanlder = () => {
    setIsHovering(false);
  };

  const onClickScrollDownHanlder = () => {
    setIsClicked(true);
    playClick();
  };

  return (
    <>
      <ScrollDownWrapper
        href="#anchor"
        onMouseEnter={onEnterScrollDownHanlder}
        onMouseLeave={onLeaveScrollDownHanlder}
        onClick={onClickScrollDownHanlder}
      >
        <ScrollDownLabel>Discover more projects</ScrollDownLabel>
        <ScrollDownIconWrapper>
          <IcArrow />
        </ScrollDownIconWrapper>
      </ScrollDownWrapper>
    </>
  );
}

const ScrollDownLabel = styled.p`
  ${InterTitleStyle}
  color: ${({ theme }) => theme.TextStrong}
`;

const ScrollDownIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: 50%;
  margin-left: ${pxToRem(8)};

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
    background-color: ${({ theme }) => theme.Text};
    border-radius: 50%;
    opacity: 0;
  }

  svg {
    max-width: ${pxToRem(16)};
    max-height: ${pxToRem(16)};
    path {
      fill: ${({ theme }) => theme.Text};
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

const ScrollDownWrapper = styled.a`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;

  ${media.tablet} {
    position: absolute;
    top: 90vh;
    left: calc(${gridMargins.tablet} + ${gridColSizes.tablet});
  }
  ${media.laptop} {
    width: 100%;
    left: calc(${gridMargins.laptop} + ${gridColSizes.laptop});
  }
  ${media.desktop} {
    left: calc(${gridMargins.desktop} + ${gridColSizes.desktop} * 2);
  }
  ${media.max} {
    left: calc(${gridMargins.max} + ${gridColSizes.max} * 2);
  }

  &:hover {
    ${ScrollDownIconWrapper} {
      &:after {
        animation: pulseRing 0.8s linear;
      }
      svg {
        -webkit-animation: jello-horizontal 0.9s both;
        animation: jello-horizontal 0.9s both;
      }
    }
  }
`;
