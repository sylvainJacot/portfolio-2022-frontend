import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import styled from "styled-components";
import { useEffect } from "react";
import ScrollDown from "../scrollDown/ScrollDown";

export let smoother = undefined;

export default function SmoothScroller(props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);
    smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 2,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      //   effects: true,
      preventDefault: true,
      effects: true,
    });

    // FOUND ON https://greensock.com/forums/topic/31925-scrollsmoother-and-scrollto-conflict-with-anchor-links-while-scrolling/

    // Detect if a link's href goes to the current page
    function getSamePageAnchor(link) {
      if (
        link.protocol !== window.location.protocol ||
        link.host !== window.location.host ||
        link.pathname !== window.location.pathname ||
        link.search !== window.location.search
      ) {
        return false;
      }

      return link.hash;
    }

    // Scroll to a given hash, preventing the event given if there is one
    function scrollToHash(hash, e) {
      const elem = hash ? document.querySelector(hash) : false;
      if (elem) {
        if (e) e.preventDefault();
        //gsap.to( window, { scrollTo: elem } );
        smoother.scrollTo(elem, true);
      }
    }

    // If a link's href is within the current page, scroll to it instead
    document.querySelectorAll("a[href]").forEach((a) => {
      a.addEventListener("click", (e) => {
        scrollToHash(getSamePageAnchor(a), e);
      });
    });

    // Scroll to the element in the URL's hash on load
    scrollToHash(window.location.hash);
  });

  return (
    <>
      <Wrapper id="wrapper">
        <Content id="content">{props.children}</Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Content = styled.div``;
