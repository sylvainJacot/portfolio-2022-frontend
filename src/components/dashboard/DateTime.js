import styled from "styled-components";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import { InterTitleStyle } from "../primitives/typography";
import { pxToRem } from "../../lib/functions/pxToRem";
import { borderRadiusfeatures } from "../layout/CommonValue";
import { transitionDefault } from "../animations/transitions";

export default function Datetime(props) {
  const getDate = new Date();
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <DatetimeWrapper $datetimestate={props.datetimestate}>
        <DateItem $datetimestate={props.datetimestate} format="ddd, MMMM Do YY">
          {getDate}
        </DateItem>
        <Time $datetimestate={props.datetimestate} format="HH:mm">
          {time}
        </Time>
      </DatetimeWrapper>
    </>
  );
}

const DatetimeWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: time;
  padding: ${pxToRem(16)};
  background-color: ${({ theme }) => theme.BlockBackground};
  border-radius: ${borderRadiusfeatures};
  opacity: ${(props) => (props.$datetimestate ? 1 : 0)};
  transform-origin: center right;
  transform: ${(props) => (props.$datetimestate ? "scalex(1)" : "scalex(0)")};
  transition: all ${transitionDefault};
`;

const DateItem = styled(Moment)`
  ${InterTitleStyle}
  color: ${({ theme }) => theme.TextNeg};
  clip-path: ${(props) =>
    props.$datetimestate
      ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);"};
  z-index: 1;
`;

const Time = styled(Moment)`
  ${InterTitleStyle}
  color: ${({ theme }) => theme.TextNeg};
  clip-path: ${(props) =>
    props.$datetimestate
      ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      : "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);"};
  /* transition: all ${transitionDefault};
  transition-delay: 0.5s; */
  z-index: 1;
`;
