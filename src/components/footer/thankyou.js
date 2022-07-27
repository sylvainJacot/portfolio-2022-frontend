import styled from "styled-components";
import { Heading01Style } from "../primitives/typography";
import { pxToRem } from "../../lib/functions/pxToRem";
import media from "../layout/Mediaqueries";

export default function ThankYou(props) {
  return (
    <>
      <Text thankYouState={props.thankYouState} ref={props.thankYouTextRef}>
        Thank you for watching
      </Text>
    </>
  );
}

const Text = styled.p`
  ${Heading01Style}
  color: ${({ theme }) => theme.Text};
  margin-bottom: ${pxToRem(32)};
  opacity: ${(props) => (props.thankYouState ? "1" : "0")};
  transform: ${(props) =>
    props.thankYouState ? "translateY(0)" : "translateY(-160px)"};
  transition: all 2s ease-out;

  strong {
    ${Heading01Style}
    color: ${({ theme }) => theme.TextStrong};
  }

  ${media.tablet} {
    margin-bottom: ${pxToRem(40)};
  }
  ${media.desktop} {
    margin-bottom: ${pxToRem(48)};
  }
`;
