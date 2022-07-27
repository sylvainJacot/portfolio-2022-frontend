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

const soundUrl = "/sounds/moreProjects.mp3";
const soundClickUrl = "/sounds/click.mp3";

const Project = (props) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { bodyColor, bodyColorChangeHandler } = useContext(BodyContext);

  const { title, description, src, mainColor, baseline, url } = props;

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
            "-=0.3"
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

  return (
    <>
      <ProjectWrapper
        mainColor={mainColor}
        className="project-wrapper"
        ref={addToMainItemRef}
      >
        <TitlePicture>
          <TextHeader>
            <Title ref={addToTitleRef}>{title}</Title>
            <SubTitle ref={addToSubTitleRef}>{baseline}</SubTitle>
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
              <img
                data-speed="auto"
                src={process.env.NEXT_PUBLIC_STRAPI_URL + src}
                alt="me"
              />
            </PictureWrapper>
          </a>
        </TitlePicture>

        <DescriptionWrapper ref={addToDescwrapperRef}>
          <p ref={addToDescRef}>{description}</p>
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

  ${media.tablet} {
    align-items: flex-end;
    width: calc(${gridColSizes.tablet} * 6);
    margin-top: ${pxToRem(160)};
    margin-left: unset;
    margin-bottom: unset;
  }
  ${media.laptop} {
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
  ${ProjectTitleStyle}
  color: ${colors.White};
  margin-bottom: ${pxToRem(24)};
  padding-bottom: ${pxToRem(24)};

  &:after {
    position: absolute;
    content: "";
    display: block;
    height: ${pxToRem(1)};
    width: ${pxToRem(400)};
    background-color: ${colors.White};
    bottom: 0;
    right: ${pxToRem(-300)};
    z-index: 1;
  }
`;

const SubTitle = styled.p`
  ${ParagraphBigStyle};
  color: ${colors.White};
  text-align: right;
`;

const PictureWrapper = styled.div`
  display: block;
  width: calc(${gridColSizes.mobile} * 9);
  aspect-ratio: 1/1;
  margin-left: calc(${gridColSizes.mobile} * 2);
  border-radius: ${borderRadiusfeatures};
  background-color: ${({ theme }) => theme.BlockBackground};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 10);
    margin-left: calc(${gridColSizes.tablet});
  }
  ${media.laptop} {
    width: calc(${gridColSizes.laptop} * 12);
    margin-left: calc(${gridColSizes.laptop});
    margin-right: unset;
    /* margin-right: calc(${gridColSizes.laptop} * 1); */
  }
  ${media.desktop} {
    width: calc(${gridColSizes.desktop} * 11);
    margin-left: calc(${gridColSizes.desktop});
  }
  ${media.max} {
    width: calc(${gridColSizes.max} * 11);
    margin-left: calc(${gridColSizes.desktop});
  }

  ${imgCoverParallax}
`;

const TitlePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: ${pxToRem(48)}; */
  margin-top: auto;
  margin-bottom: auto;

  ${media.tablet} {
    flex-direction: row;
    /* margin-top: ${pxToRem(160)}; */
  }
  ${media.laptop} {
    /* margin-top: ${pxToRem(88)}; */
  }
  ${media.desktop} {
  }
  ${media.max} {
  }
`;

const DescriptionWrapper = styled.div`
  display: block;
  position: absolute;
  background-color: ${colors.White};
  width: calc(${gridColSizes.mobile} * 8);
  padding: ${pxToRem(24)};
  border-radius: ${borderRadiusfeatures};
  bottom: 4vh;
  transform-origin: top;

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 9);
    left: calc(${gridColSizes.tablet} * 4);
    padding: ${pxToRem(32)};
    bottom: 8vh;
  }
  ${media.laptop} {
    width: calc(${gridColSizes.laptop} * 12);
    padding: ${pxToRem(40)};
    bottom: 4vh;
  }
  ${media.desktop} {
    width: calc(${gridColSizes.desktop} * 9);
    padding: ${pxToRem(48)};
    left: calc(${gridColSizes.desktop} * 4);
  }
  ${media.max} {
    width: calc(${gridColSizes.max} * 9);
    left: calc(${gridColSizes.max} * 4);
    padding: ${pxToRem(48)};
  }

  p {
    ${ParagraphStyle};
    color: ${colors.Primary};

    ${media.laptop} {
      ${ParagraphBigStyle};
    }
  }
`;

const ProjectWrapper = styled(GridWrapper)`
  position: relative;
  display: flex;
  align-items: flex-start;
  height: 100vh;
  /* margin-bottom: 50vh; */
`;
