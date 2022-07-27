import { useRef, useState, forwardRef } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styled from "styled-components";
import { pxToRem } from "../../lib/functions/pxToRem";
import { colors } from "../primitives/colors";
import { useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

import { useSpring, animated } from "react-spring";
import { Heading01Style } from "../primitives/typography";

gsap.registerPlugin(ScrollTrigger);

export default function LoaderIntro(props) {
  // on stocke les ref des "words" dans la variable suivante. Et l'attribut .current donne accès à la ref
  // const wordsArrayRef = useRef([]);
  // wordsArrayRef.current = [];

  // const addToArrayWordRefs = (wordRef) => {
  //   if (wordRef) {
  //     wordsArrayRef.current.push(wordRef);
  //   }
  // };

  // useEffect(() => {
  //   // const produceVaderSound = () => {
  //   //   play();
  //   // };
  //   let timeLineWords = gsap.timeline().to(wordsArrayRef.current, {
  //     opacity: 1,
  //     duration: 1.3,
  //     stagger: 0.5,
  //     ease: Power2.out,
  //   });
  //   let loaderFadeOut = gsap.timeline().to(LoaderContainer.current, {
  //     opacity: 0,
  //     duration: 0.3,
  //     ease: Power2.out,
  //   });
  //   let masterTimeLineWords = gsap
  //     .timeline()
  //     .add(timeLineWords)
  //     .add(loaderFadeOut);
  //   // .call(produceVaderSound);
  //   // .add(timeLineWordsTest);
  //   // End useEffect
  // });

  return (
    <>
      <LoaderContainer ref={props.LoaderContainer}>
        {props.loaderQuery &&
          props.loaderQuery.map((word, index) => {
            return (
              <Word key={index} ref={props.addToArrayWordRefs}>
                {word.Word}
              </Word>
            );
          })}
      </LoaderContainer>
    </>
  );
}

const LoaderContainer = styled.div`
  background-color: ${colors.Primary};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  pointer-events: none;
`;

const Word = styled.p`
  ${Heading01Style}
  display: inline-block;
  color: ${colors.White};
  font-size: ${pxToRem(64)};
  opacity: 0;
  z-index: 1;
  &:not(:last-child) {
    margin-right: ${pxToRem(12)};
  }
`;
