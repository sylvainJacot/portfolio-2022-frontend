import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { withTheme } from "styled-components";
import React, { useEffect, useContext, useState } from "react";
import useSound from "use-sound";

import { BodyContext } from "../../context/body-context";
import { MouseContext } from "../../context/mouse-context";
import { OverallSoundContext } from "../../context/sound-context";
import { size } from "../layout/Mediaqueries";
import ProjectNodes from "./ProjectNodes";

import { ProjectWrapper } from "./Project.styled";
import { useProjectRefs } from "./Project.hook";

const soundUrl = "/sounds/moreProjects.mp3";
const soundClickUrl = "/sounds/click.mp3";

const Project = (props) => {
  const {
    itemMainRef,
    itemPicRef,
    itemTitleRef,
    itemDescRef,
    itemDescWrapperRef,
    itemSubtitleRef,
    addToDescwrapperRef,
    addToSubTitleRef,
    addToDescRef,
    addToTitleRef,
    addToPicRef,
    addToMainItemRef,
  } = useProjectRefs();
  const {
    title,
    description,
    src,
    mainColor,
    baseline,
    url,
    alt,
    textColorNeg,
    textColor,
  } = props;

  const srcImage = `${process.env.NEXT_PUBLIC_URL}${src}`;

  const { cursorChangeHandler } = useContext(MouseContext);

  const overallSound = useContext(OverallSoundContext);
  const [playHover] = useSound(soundUrl, {
    soundEnabled: overallSound,
  });
  const [playClick] = useSound(soundClickUrl, {
    soundEnabled: overallSound,
  });
  const [isHovering, setIsHovering] = useState(false);

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
  const { bodyColorChangeHandler } = useContext(BodyContext);

  const handleScrollAnimations = () => {
    itemMainRef.current.map((item) => {
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
            // bodyColorChangeHandler((theme) => theme.BlockBackground);
            bodyColorChangeHandler("transparent");
          },
          onLeaveBack: () => {
            // bodyColorChangeHandler((theme) => theme.BlockBackground);
            bodyColorChangeHandler("transparent");
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
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals(" ScrollTrigger", ScrollTrigger);
    }

    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": function () {
        handleScrollAnimations();
        window.addEventListener("resize", () => ScrollTrigger.refresh);
      },
    });

    // return () => window.addEventListener("resize", handleScrollAnimations);
    // return () => window.addEventListener("resize", () => ScrollTrigger.refresh);
  }, [
    itemMainRef,
    itemPicRef,
    itemTitleRef,
    itemDescRef,
    itemSubtitleRef,
    itemDescWrapperRef,
  ]);

  const myLoader = () => {
    return srcImage;
  };

  return (
    <>
      <ProjectWrapper
        mainColor={mainColor}
        className="project-wrapper"
        ref={addToMainItemRef}
      >
        <ProjectNodes
          addToTitleRef={addToTitleRef}
          title={title}
          addToSubTitleRef={addToSubTitleRef}
          textColor={textColor}
          textColorNeg={textColorNeg}
          baseline={baseline}
          url={url}
          onClickProjectItemHanlder={onClickProjectItemHanlder}
          addToPicRef={addToPicRef}
          onEnterProjectHanlder={onEnterProjectHanlder}
          onLeaveProjectHanlder={onLeaveProjectHanlder}
          myLoader={myLoader}
          source={srcImage}
          alt={alt}
          blurDataURL={srcImage}
          addToDescRef={addToDescRef}
          addToDescwrapperRef={addToDescwrapperRef}
          description={description}
        />
      </ProjectWrapper>
    </>
  );
};
export default withTheme(Project);
