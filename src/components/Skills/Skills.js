import styled from "styled-components";
import { IcHtml, IcReact, IcSass } from "../primitives/iconsRaw";
import { colors } from "../primitives/colors";
import Grid, { gridColSizes, GridWrapper } from "../layout/Grid";
import { pxToRem } from "../../lib/functions/pxToRem";
import { Heading01Style, InterTitleStyle } from "../primitives/typography";
import media from "../layout/Mediaqueries";
import { transitionDefault } from "../animations/transitions";

export default function Skills(props) {
  return (
    <>
      <GridExtended>
        <SkillTitle>My skills set</SkillTitle>

        <SkillsWrapper>
          <MainSkill>
            <IcHtml />
          </MainSkill>
          <MainSkill>
            <IcSass />
          </MainSkill>
          <MainSkill>
            <IcReact />
          </MainSkill>
          {props.Skills &&
            props.Skills.map((item) => (
              <SoftSkill key={item.id}>{item.SkillName}</SoftSkill>
            ))}
        </SkillsWrapper>
      </GridExtended>
    </>
  );
}

const GridExtended = styled(GridWrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.desktop} {
    padding: 0 calc(4 * ${gridColSizes.desktop});
  }
  ${media.max} {
    padding: 0 calc(4 * ${gridColSizes.max});
  }
`;

const SkillTitle = styled.h2`
  ${Heading01Style};
  color: ${({ theme }) => theme.Text};
  margin-bottom: ${pxToRem(80)};
`;

const SkillsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50%;
  margin: 0 auto;
  transition: all ${transitionDefault};
  ${media.laptop} {
    height: 50%;
    margin: unset;
    &:hover {
      padding: 0 calc(1 * ${gridColSizes.desktop});
      transition: all 0.3s ease-out;
      p {
        opacity: 0.5;
        transition: all 0.3s ease-out;
        &:nth-of-type(1) {
          transition-delay: 0.05s;
        }

        &:nth-of-type(2) {
          transition-delay: 0.1s;
        }

        &:nth-of-type(3) {
          transition-delay: 0.15s;
        }

        &:nth-of-type(4) {
          transition-delay: 0.2s;
        }
        &:nth-of-type(5) {
          transition-delay: 0.25s;
        }
        &:nth-of-type(6) {
          transition-delay: 0.3s;
        }
        &:nth-of-type(7) {
          transition-delay: 0.35s;
        }
        &:nth-of-type(8) {
          transition-delay: 0.4s;
        }
        &:nth-of-type(9) {
          transition-delay: 0.45s;
        }
      }
    }
  }
  ${media.desktop} {
    width: 100%;
  }
`;

const MainSkill = styled.span`
  width: ${pxToRem(56)};
  height: ${pxToRem(56)};

  ${media.laptop} {
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
  }

  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${({ theme }) => theme.TextStrong};
    }
  }
`;

const SoftSkill = styled.p`
  position: absolute;
  ${InterTitleStyle}
  color: ${({ theme }) => theme.TextStrong};
  transition: all ${transitionDefault};

  ${media.laptop} {
    opacity: 0;
  }

  &:nth-of-type(1) {
    top: 0;
    transform: scale(1.4);
    ${media.laptop} {
      left: 5%;
    }
  }

  &:nth-of-type(2) {
    bottom: 0;
    right: 0;
    transform: scale(1.3);
    ${media.laptop} {
      right: 5%;
    }
  }

  &:nth-of-type(3) {
    top: 0;
    right: 0;
    transform: scale(1.2);
  }

  &:nth-of-type(4) {
    bottom: 0;
    left: 5%;
    transform: scale(1.1);
  }
  &:nth-of-type(5) {
    top: 20%;
    left: 35%;
    transform: scale(1);
  }
  &:nth-of-type(6) {
    bottom: 20%;
    right: 35%;
    transform: scale(0.9);
  }
  &:nth-of-type(7) {
    right: 20%;
    top: 10%;
    transform: scale(0.8);
  }
  &:nth-of-type(8) {
    right: -5%;
    top: 30%;
    transform: scale(0.8);
    ${media.laptop} {
      top: 40%;
    }
  }
  &:nth-of-type(9) {
    left: -5%;
    bottom: 30%;
    transform: scale(0.8);
    ${media.laptop} {
      bottom: 40%;
    }
  }
`;
