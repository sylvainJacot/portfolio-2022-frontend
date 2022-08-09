import React from "react";
import {
  Description,
  DescriptionWrapper,
  PictureWrapper,
  SubTitle,
  TextHeader,
  Title,
  TitlePicture,
} from "./Project.styled";
import Image from "next/image";

export default function ProjectNodes(props) {
  return (
    <>
      <TitlePicture>
        <TextHeader>
          <Title textColor={props.textColor} ref={props.addToTitleRef}>
            {props.title}
          </Title>
          <SubTitle
            ref={props.addToSubTitleRef}
            textColor={props.textColor}
            textColorNeg={props.textColorNeg}
          >
            {props.baseline}
          </SubTitle>
        </TextHeader>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          onClick={props.onClickProjectItemHanlder}
        >
          <PictureWrapper
            ref={props.addToPicRef}
            onMouseEnter={props.onEnterProjectHanlder}
            onMouseLeave={props.onLeaveProjectHanlder}
            onClick={props.onClickProjectItemHanlder}
          >
            <Image
              loader={props.myLoader}
              layout="fill"
              src={props.source}
              alt={props.alt}
              blurDataURL={props.blurDataURL}
              placeholder="blur"
            />
          </PictureWrapper>
        </a>
      </TitlePicture>

      <DescriptionWrapper ref={props.addToDescwrapperRef}>
        <Description ref={props.addToDescRef} textColorNeg={props.textColorNeg}>
          {props.description}
        </Description>
      </DescriptionWrapper>
    </>
  );
}
