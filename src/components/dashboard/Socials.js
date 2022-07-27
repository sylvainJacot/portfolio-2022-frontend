import styled from "styled-components";
import Link from "next/link";
import { InterTitleStyle } from "../primitives/typography";
import { colors } from "../primitives/colors";
import { pxToRem } from "../../lib/functions/pxToRem";
import { IcEmail, IcLinkedin, IcWhatsapp } from "../primitives/iconsRaw";
import { borderRadiusfeatures } from "../layout/CommonValue";
import { transitionDefault } from "../animations/transitions";
import { useContext, useState } from "react";
import { MouseContext } from "../../context/mouse-context";
import media from "../layout/Mediaqueries";
import useSound from "use-sound";
import { OverallSoundContext } from "../../context/sound-context";
import { AvatarContext } from "../../context/avatar-context";
import avatarDefault from "../../../public/img/avatar-01.png";
import avatar02 from "../../../public/img/avatar-02.png";
import avatar03 from "../../../public/img/avatar-03.png";
import avatar04 from "../../../public/img/avatar-04.png";

const soundUrl = "/sounds/pop01.mp3";
const soundClickUrl = "/sounds/click.mp3";

export default function Socials(props) {
  const { overallSound, overallSoundChangeHandler } =
    useContext(OverallSoundContext);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [play, { stop }] = useSound(soundUrl, {
    volume: 0.5,
    soundEnabled: overallSound,
  });
  const [playClick, { stopClick }] = useSound(soundClickUrl);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { avatar, avatarChangeHandler } = useContext(AvatarContext);

  const onEnterSocialItemHanlder = () => {
    cursorChangeHandler("hoverLink");
    setIsHovering(true);
    play();
  };

  const onLeaveSocialItemHanlder = () => {
    cursorChangeHandler("");
    setIsHovering(false);
    stop();
  };

  const onClickSocialItemHanlder = () => {
    playClick();
  };

  return (
    <>
      <SocialsWrapper socialsState={props.socialsState}>
        <Social socialsState={props.socialsState}>
          <a
            onMouseEnter={() => {
              onEnterSocialItemHanlder();
              avatarChangeHandler(avatar02);
            }}
            onMouseLeave={() => {
              onLeaveSocialItemHanlder();
              avatarChangeHandler(avatarDefault);
            }}
            onClick={onClickSocialItemHanlder}
            href={props.Socials.LinkedinUrl}
            target="_blank"
          >
            {" "}
            <SocialIcon>
              <IcLinkedin />
            </SocialIcon>
            {props.Socials.Linkedin}
          </a>
        </Social>

        <Social socialsState={props.socialsState}>
          <a
            onMouseEnter={() => {
              onEnterSocialItemHanlder();
              avatarChangeHandler(avatar03);
            }}
            onMouseLeave={() => {
              onLeaveSocialItemHanlder();
              avatarChangeHandler(avatarDefault);
            }}
            onClick={onClickSocialItemHanlder}
            href={"mailto:" + props.Socials.EmailUrl}
          >
            {" "}
            <SocialIcon>
              <IcEmail />
            </SocialIcon>
            {props.Socials.Email}
          </a>
        </Social>

        <Social socialsState={props.socialsState}>
          <a
            onMouseEnter={() => {
              onEnterSocialItemHanlder();
              avatarChangeHandler(avatar04);
            }}
            onMouseLeave={() => {
              onLeaveSocialItemHanlder();
              avatarChangeHandler(avatarDefault);
            }}
            onClick={onClickSocialItemHanlder}
            href={props.Socials.WhatsappUrl}
          >
            {" "}
            <SocialIcon>
              <IcWhatsapp />
            </SocialIcon>
            {props.Socials.Whatsapp}
          </a>
        </Social>
      </SocialsWrapper>
    </>
  );
}

const SocialsWrapper = styled.ul`
  /* background-color: ${({ theme }) => theme.BlockBackground}; */
  position: relative;
  grid-area: social;
  align-self: flex-start;
  padding: ${pxToRem(16)} ${pxToRem(24)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  border-radius: ${borderRadiusfeatures};
  transition: all ${transitionDefault};
  background-color: ${({ theme }) => theme.BlockBackground};
  transform-origin: bottom center;
  transform: ${(props) => (props.socialsState ? "scaley(1)" : "scaley(0)")};

  ${media.laptop} {
    padding: ${pxToRem(24)} ${pxToRem(32)};
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SocialIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: 50%;

  ${media.laptop} {
    margin-right: ${pxToRem(8)};
    border: solid ${pxToRem(1)} ${({ theme }) => theme.TextNeg};
  }

  svg {
    max-width: ${pxToRem(32)};
    max-height: ${pxToRem(32)};
    ${media.laptop} {
      max-width: ${pxToRem(16)};
      max-height: ${pxToRem(16)};
    }
    path {
      fill: ${({ theme }) => theme.TextNeg};
    }
  }
`;

const Social = styled.li`
  font-size: 0;
  transform: ${(props) =>
    props.socialsState ? "translateY(0)" : "translateY(" + pxToRem(16) + ")"};
  transition: all ${transitionDefault};
  opacity: ${(props) => (props.socialsState ? "1" : "0")};
  &:nth-child(1) {
    transition-delay: 0.4s;
  }
  &:nth-child(2) {
    transition-delay: 0.5s;
  }
  &:nth-child(3) {
    transition-delay: 0.6s;
  }
  &:not(:last-of-type) {
    ${media.laptop} {
      margin-bottom: ${pxToRem(16)};
    }
  }

  ${media.laptop} {
    ${InterTitleStyle};
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.TextStrong};
      transition: all ${transitionDefault};

      ${SocialIcon} {
        border: solid ${pxToRem(1)} transparent;
        transition: all ${transitionDefault};
        svg {
          animation: button_social-bounce 1s linear;
          path {
            fill: ${({ theme }) => theme.TextStrong};
            transition: all ${transitionDefault};
          }
        }
      }
    }
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.TextNeg};
  }

  @keyframes button_social-bounce {
    0% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    5.71% {
      transform: matrix3d(1.15, 0, 0, 0, 0, 1.15, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    7.61% {
      transform: matrix3d(
        1.172,
        0,
        0,
        0,
        0,
        1.172,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    11.31% {
      transform: matrix3d(
        1.182,
        0,
        0,
        0,
        0,
        1.182,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    11.41% {
      transform: matrix3d(
        1.182,
        0,
        0,
        0,
        0,
        1.182,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    15.12% {
      transform: matrix3d(
        1.166,
        0,
        0,
        0,
        0,
        1.166,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    17.02% {
      transform: matrix3d(
        1.153,
        0,
        0,
        0,
        0,
        1.153,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    18.92% {
      transform: matrix3d(
        1.138,
        0,
        0,
        0,
        0,
        1.138,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    22.62% {
      transform: matrix3d(
        1.107,
        0,
        0,
        0,
        0,
        1.107,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    22.72% {
      transform: matrix3d(
        1.106,
        0,
        0,
        0,
        0,
        1.106,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    28.33% {
      transform: matrix3d(
        1.063,
        0,
        0,
        0,
        0,
        1.063,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    30.23% {
      transform: matrix3d(
        1.051,
        0,
        0,
        0,
        0,
        1.051,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    33.93% {
      transform: matrix3d(
        1.031,
        0,
        0,
        0,
        0,
        1.031,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    45.15% {
      transform: matrix3d(
        0.998,
        0,
        0,
        0,
        0,
        0.998,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    50.25% {
      transform: matrix3d(
        0.992,
        0,
        0,
        0,
        0,
        0.992,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    70.27% {
      transform: matrix3d(
        0.994,
        0,
        0,
        0,
        0,
        0.994,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    72.57% {
      transform: matrix3d(
        0.994,
        0,
        0,
        0,
        0,
        0.994,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    100% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  }
`;
