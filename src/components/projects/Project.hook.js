import { gsap, Power2 } from "gsap";
import { useRef, useContext } from "react";
import { BodyContext } from "../../context/body-context";

export const useProjectRefs = () => {
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

  return {
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
  };
};
