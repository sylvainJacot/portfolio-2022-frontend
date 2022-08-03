import styled from "styled-components";
import { gridColSizes, GridWrapper } from "../layout/Grid";
import React, { useEffect, useRef, useContext, useState } from "react";
import {
  ParagraphBigStyle,
  ParagraphStyle,
  ProjectTitleStyle,
} from "../primitives/typography";
import { imgCoverParallax } from "../../lib/functions/imgCover";
import media from "../layout/Mediaqueries";
import { pxToRem } from "../../lib/functions/pxToRem";
import { colors } from "../primitives/colors";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { borderRadiusfeatures } from "../layout/CommonValue";
import { MouseContext } from "../../context/mouse-context";
import { BodyContext } from "../../context/body-context";
import useSound from "use-sound";
import { OverallSoundContext } from "../../context/sound-context";
import Image from "next/image";

const soundUrl = "/sounds/moreProjects.mp3";
const soundClickUrl = "/sounds/click.mp3";

const Project = (props) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { bodyColor, bodyColorChangeHandler } = useContext(BodyContext);

  const { title, description, src, mainColor, baseline, url, alt } = props;

  const { overallSound, overallSoundChangeHandler } =
    useContext(OverallSoundContext);
  const [playHover, { stop }] = useSound(soundUrl, {
    soundEnabled: overallSound,
  });
  const [playClick, { stopClick }] = useSound(soundClickUrl, {
    soundEnabled: overallSound,
  });
  const [isHovering, setIsHovering] = useState(false);

  const itemMainRef = useRef([]);
  itemMainRef.current = [];

  const itemPicRef = useRef([]);
  itemPicRef.current = [];

  const itemTitleRef = useRef([]);
  itemTitleRef.current = [];

  const itemDescRef = useRef([]);
  itemDescRef.current = [];

  const itemDescWrapperRef = useRef([]);
  itemDescWrapperRef.current = [];

  const itemSubtitleRef = useRef([]);
  itemSubtitleRef.current = [];

  const addToMainItemRef = (mainRef) => {
    if (mainRef) {
      itemMainRef.current.push(mainRef);
    }
  };

  const addToPicRef = (picRef) => {
    if (picRef) {
      itemPicRef.current.push(picRef);
    }
  };

  const addToTitleRef = (titleRef) => {
    if (titleRef) {
      itemTitleRef.current.push(titleRef);
    }
  };

  const addToDescRef = (descRef) => {
    if (descRef) {
      itemDescRef.current.push(descRef);
    }
  };

  const addToSubTitleRef = (subtitleRef) => {
    if (subtitleRef) {
      itemSubtitleRef.current.push(subtitleRef);
    }
  };
  const addToDescwrapperRef = (descWrapperRef) => {
    if (descWrapperRef) {
      itemDescWrapperRef.current.push(descWrapperRef);
    }
  };

  const onEnterProjectHanlder = () => {
    cursorChangeHandler("hoverProject");
    setIsHovering(true);
    playHover();
  };

  const onLeaveProjectHanlder = () => {
    cursorChangeHandler("");
    setIsHovering(false);
  };

  const onClickProjectItemHanlder = () => {
    playClick();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals(" ScrollTrigger", ScrollTrigger);
    }

    const handleScrollAnimations = () => {
      if (window.innerWidth > 1023) {
        itemMainRef.current.map((item, index) => {
          let timeLineProject = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              toggleActions: "restart reverse restart reverse",
              pin: true,
              onEnter: () => {
                bodyColorChangeHandler(mainColor);
              },
              onEnterBack: () => {
                bodyColorChangeHandler(mainColor);
              },
              onLeave: () => {
                bodyColorChangeHandler((theme) => theme.BlockBackground);
              },
              onLeaveBack: () => {
                bodyColorChangeHandler((theme) => theme.BlockBackground);
              },
            },
          });
          timeLineProject.from(
            itemPicRef.current,
            {
              autoAlpha: 0,
              ease: Power2,
              clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
            },

            "-=1.6"
          );
          timeLineProject.from(itemTitleRef.current, {
            opacity: 0,
            x: 32,
            ease: Power2,
          });
          timeLineProject.from(
            itemSubtitleRef.current,
            {
              opacity: 0,
              x: 32,
              ease: Power2,
            },
            "-=0.3"
          );
          timeLineProject.from(
            itemDescWrapperRef.current,
            {
              scaleY: 0,
              ease: Power2,
            },
            "-=0.6"
          );
          timeLineProject.from(
            itemDescRef.current,
            {
              opacity: 0,
              ease: Power2,
            },
            "-=0.2"
          );
        });
      }
    };

    handleScrollAnimations();

    window.addEventListener("resize", handleScrollAnimations);
  }, [
    itemMainRef,
    itemPicRef,
    itemTitleRef,
    itemDescRef,
    itemSubtitleRef,
    itemDescWrapperRef,
  ]);

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_URL}${src}`;
  };

  return (
    <>
      <ProjectWrapper
        mainColor={mainColor}
        className="project-wrapper"
        ref={addToMainItemRef}
      >
        <TitlePicture>
          <TextHeader>
            <Title textColor={props.textColor} ref={addToTitleRef}>
              {title}
            </Title>
            <SubTitle
              ref={addToSubTitleRef}
              textColor={props.textColor}
              textColorNeg={props.textColorNeg}
            >
              {baseline}
            </SubTitle>
          </TextHeader>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={onClickProjectItemHanlder}
          >
            <PictureWrapper
              ref={addToPicRef}
              onMouseEnter={onEnterProjectHanlder}
              onMouseLeave={onLeaveProjectHanlder}
              onClick={onClickProjectItemHanlder}
            >
              <Image
                loader={myLoader}
                layout="fill"
                src={`${process.env.NEXT_PUBLIC_URL}${src}`}
                alt={alt}
              />
            </PictureWrapper>
          </a>
        </TitlePicture>

        <DescriptionWrapper ref={addToDescwrapperRef}>
          <Description ref={addToDescRef} textColorNeg={props.textColorNeg}>
            {description}
          </Description>
        </DescriptionWrapper>
      </ProjectWrapper>
    </>
  );
};
export default Project;

const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${pxToRem(56)};
  width: calc(${gridColSizes.mobile} * 10);
  margin-left: ${gridColSizes.mobile};
  margin-bottom: ${pxToRem(24)};
  overflow: hidden;

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 8);
    margin-left: 0;
    margin-top: ${pxToRem(160)};
  }
  ${media.laptop} {
    overflow: unset;
    align-items: flex-end;
    margin-left: unset;
    margin-bottom: unset;
    width: calc(${gridColSizes.laptop} * 8);
  }
  ${media.desktop} {
    margin-left: ${gridColSizes.desktop};
    width: calc(${gridColSizes.desktop} * 7);
  }
  ${media.max} {
    margin-left: ${gridColSizes.max};
    width: calc(${gridColSizes.max} * 7);
  }
`;

const Title = styled.h1`
  position: relative;
  ${ProjectTitleStyle};
  color: ${({ theme }) => theme.TextStrong};
  margin-bottom: ${pxToRem(24)};
  padding-bottom: ${pxToRem(24)};

  ${media.laptop} {
    color: ${(props) => props.textColor};
  }

  &:after {
    position: absolute;
    content: "";
    display: block;
    height: ${pxToRem(1)};
    width: ${pxToRem(400)};
    background-color: ${({ theme }) => theme.TextStrong};
    bottom: 0;

    z-index: 1;

    ${media.laptop} {
      background-color: ${colors.White};
      right: ${pxToRem(-300)};
    }
  }
`;

const SubTitle = styled.p`
  ${ParagraphBigStyle};
  color: ${({ theme }) => theme.Text};
  ${media.laptop} {
    text-align: right;
    color: ${(props) => props.textColor};
  }
`;

const PictureWrapper = styled.div`
  position: relative;
  display: block;
  width: calc(${gridColSizes.mobile} * 9);
  aspect-ratio: 1/1;
  margin-left: calc(${gridColSizes.mobile} * 2);
  border-radius: ${borderRadiusfeatures};
  background-color: ${({ theme }) => theme.BlockBackground};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 10);
    margin-left: calc(5 * ${gridColSizes.tablet});
  }
  ${media.laptop} {
    width: calc(${gridColSizes.laptop} * 10);
    margin-left: calc(2 * ${gridColSizes.laptop});
    margin-right: unset;
  }
  ${media.desktop} {
    width: calc(${gridColSizes.desktop} * 11);
    margin-left: calc(${gridColSizes.desktop});
  }
  ${media.max} {
    width: calc(${gridColSizes.max} * 11);
    margin-left: calc(${gridColSizes.desktop});
  }

  span {
    ${imgCoverParallax}
  }
`;

const TitlePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  ${media.laptop} {
    flex-direction: row;
  }
  ${media.desktop} {
  }
  ${media.max} {
  }
`;

const DescriptionWrapper = styled.div`
  display: block;
  position: relative;
  background-color: ${colors.White};
  width: calc(${gridColSizes.mobile} * 8);
  padding: ${pxToRem(24)};
  border-radius: ${borderRadiusfeatures};
  bottom: 4vh;
  transform-origin: top;

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 9);
    left: calc(${gridColSizes.tablet} * 3);
    padding: ${pxToRem(32)};
    bottom: 20vh;
  }
  ${media.laptop} {
    width: calc(${gridColSizes.laptop} * 12);
    padding: ${pxToRem(40)};
    bottom: 4vh;
  }
  ${media.desktop} {
    position: absolute;
    width: calc(${gridColSizes.desktop} * 9);
    padding: ${pxToRem(48)};
    left: calc(${gridColSizes.desktop} * 4);
  }
  ${media.max} {
    width: calc(${gridColSizes.max} * 9);
    left: calc(${gridColSizes.max} * 4);
    padding: ${pxToRem(48)};
  }
`;

const Description = styled.p`
  ${ParagraphStyle};
  color: ${(props) => props.textColorNeg};

  ${media.laptop} {
    ${ParagraphBigStyle};
    color: ${(props) => props.textColorNeg};
  }
`;

const ProjectWrapper = styled(GridWrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${pxToRem(96)};

  ${media.tablet} {
    margin-bottom: ${pxToRem(0)};
  }
  ${media.laptop} {
    margin-bottom: unset;
  }
  ${media.desktop} {
    height: 100vh;
  }
`;
