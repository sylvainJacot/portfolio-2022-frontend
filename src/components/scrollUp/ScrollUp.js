import styled from "styled-components";
import { IcArrow } from "../primitives/iconsRaw";
import { pxToRem } from "../../lib/functions/pxToRem";
import { InterTitleStyle } from "../primitives/typography";
import { useState, useContext } from "react";
import useSound from "use-sound";
import { OverallSoundContext } from "../../context/sound-context";

const soundUrl = "/sounds/moreProjects.mp3";
const soundClickUrl = "/sounds/click.mp3";

export default function ScrollUp() {
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

  const onEnterScrollUpHanlder = () => {
    setIsHovering(true);
    playHover();
  };

  const onLeaveScrollUpHanlder = () => {
    setIsHovering(false);
  };

  const onClickScrollUpHanlder = () => {
    setIsClicked(true);
    playClick();
  };

  return (
    <>
      <ScrollUpWrapper
        href="#scrollUp"
        onMouseEnter={onEnterScrollUpHanlder}
        onMouseLeave={onLeaveScrollUpHanlder}
        onClick={onClickScrollUpHanlder}
      >
        <ScrollUpLabel>Back to top</ScrollUpLabel>
        <ScrollUpIconWrapper>
          <IcArrow />
        </ScrollUpIconWrapper>
      </ScrollUpWrapper>
    </>
  );
}

const ScrollUpLabel = styled.p`
  ${InterTitleStyle}
  color: ${({ theme }) => theme.TextStrong}
`;

const ScrollUpIconWrapper = styled.div`
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
    transform: scaleY(-1);
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
      -webkit-transform: scale3d(1, -1, 1);
      transform: scale3d(1, -1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, -0.75, 1);
      transform: scale3d(1.25, -0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, -1.25, 1);
      transform: scale3d(0.75, -1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, -0.85, 1);
      transform: scale3d(1.15, -0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, -1.05, 1);
      transform: scale3d(0.95, -1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, -0.95, 1);
      transform: scale3d(1.05, -0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, -1, 1);
      transform: scale3d(1, -1, 1);
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

const ScrollUpWrapper = styled.a`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;

  &:hover {
    ${ScrollUpIconWrapper} {
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
