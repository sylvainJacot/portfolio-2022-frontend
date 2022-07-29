import styled from "styled-components";
import { InterTitleStyle, ParagraphStyle } from "../primitives/typography";
import { pxToRem } from "../../lib/functions/pxToRem";
import { borderRadiusfeatures } from "../layout/CommonValue";
import { transitionDefault } from "../animations/transitions";

export default function RandomApi(props) {
  return (
    <>
      <RandomApiWrapper apiState={props.apiState}>
        <FactTitle>Fact about cat</FactTitle>
        <Fact>{props.fact}</Fact>
      </RandomApiWrapper>
    </>
  );
}

const RandomApiWrapper = styled.div`
  background-color: ${({ theme }) => theme.BlockBackground};
  grid-area: api;
  padding: ${pxToRem(24)};
  border-radius: ${borderRadiusfeatures};
  transform-origin: top center;
  transform: ${(props) => (props.apiState ? "scaley(1)" : "scaley(0)")};
  transition: all ${transitionDefault};
`;

const FactTitle = styled.p`
  ${InterTitleStyle}
  color: ${({ theme }) => theme.TextNeg};
  margin-bottom: ${pxToRem(16)};
`;

const Fact = styled.p`
  ${ParagraphStyle}
  color: ${({ theme }) => theme.TextNeg};
`;
