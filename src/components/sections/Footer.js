import ScrollUp from "../scrollUp/ScrollUp";
import styled from "styled-components";
import { GridWrapper } from "../layout/Grid";
import ThankYou from "../footer/thankyou";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

export default function Footer() {
  const thankYouTextRef = useRef();
  const [thankYouState, setThankYouState] = useState(false);

  useEffect(() => {
    let thankYouFinish = gsap.timeline().to(thankYouTextRef.current, {
      scrollTrigger: {
        trigger: thankYouTextRef.current,
        start: "top center",
        onEnter: () => setThankYouState(true),
      },
    });
  }, []);
  return (
    <>
      <GridWrapper>
        <FooterWrapper>
          <ThankYou
            thankYouTextRef={thankYouTextRef}
            thankYouState={thankYouState}
          />
          <ScrollUp />
        </FooterWrapper>
      </GridWrapper>
    </>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
