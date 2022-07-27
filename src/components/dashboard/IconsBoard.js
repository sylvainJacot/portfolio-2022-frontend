import styled from "styled-components";
import SoundIcon from "../buttons/SoundIcon";
import ThemeToggler from "../buttons/ThemeToggler";
import { pxToRem } from "../../lib/functions/pxToRem";
import { colors } from "../primitives/colors";
import { gridMargins } from "../layout/Grid";
import media from "../layout/Mediaqueries";
import { paddingBodyTop } from "../layout/CommonValue";

export default function IconsBoard(props) {
  return (
    <>
      <IconsBoardWrapper>
        <IconWrapper>
          <SoundIcon />
        </IconWrapper>
        <IconWrapper>
          <ThemeToggler toggleTheme={props.toggleTheme} active={props.active} />
        </IconWrapper>
      </IconsBoardWrapper>
    </>
  );
}

const IconsBoardWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: ${paddingBodyTop};
  right: ${gridMargins.mobile};
  z-index: 99;

  ${media.tablet} {
    right: ${gridMargins.tablet};
  }
  ${media.laptop} {
    right: ${gridMargins.laptop};
  }
  ${media.desktop} {
    right: ${gridMargins.desktop};
  }
  ${media.max} {
    right: ${gridMargins.max};
  }
`;

const IconWrapper = styled.div`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.text};
  border-radius: 50%;
  &:not(:last-child) {
    margin-right: ${pxToRem(8)};
  }

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    & > svg,
    & > div {
      max-width: ${pxToRem(16)};
      max-height: ${pxToRem(16)};
    }
  }
`;
