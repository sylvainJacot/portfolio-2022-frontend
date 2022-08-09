import styled from "styled-components";

import { borderRadiusfeatures } from "../layout/CommonValue";
import { colors } from "../primitives/colors";
import { gridColSizes, GridWrapper } from "../layout/Grid";
import { imgCoverParallax } from "../../lib/functions/imgCover";
import {
  ParagraphBigStyle,
  ParagraphStyle,
  ProjectTitleStyle,
} from "../primitives/typography";
import { pxToRem } from "../../lib/functions/pxToRem";
import media from "../layout/Mediaqueries";

export const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${pxToRem(56)};
  width: calc(${gridColSizes.mobile} * 10);
  margin-left: ${gridColSizes.mobile};
  margin-bottom: ${pxToRem(24)};
  overflow: hidden;

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 8);
    margin-left: 0;
    margin-top: ${pxToRem(160)};
  }
  ${media.laptop} {
    overflow: unset;
    align-items: flex-end;
    margin-left: unset;
    margin-bottom: unset;
    width: calc(${gridColSizes.laptop} * 8);
  }
  ${media.desktop} {
    margin-left: ${gridColSizes.desktop};
    width: calc(${gridColSizes.desktop} * 7);
  }
  ${media.max} {
    margin-left: ${gridColSizes.max};
    width: calc(${gridColSizes.max} * 7);
  }
`;

export const Title = styled.h1`
  position: relative;
  ${ProjectTitleStyle};
  color: ${({ theme }) => theme.TextStrong};
  margin-bottom: ${pxToRem(24)};
  padding-bottom: ${pxToRem(24)};

  ${media.laptop} {
    color: ${(props) => props.textColor};
  }

  &:after {
    position: absolute;
    content: "";
    display: block;
    height: ${pxToRem(1)};
    width: ${pxToRem(400)};
    background-color: ${({ theme }) => theme.TextStrong};
    bottom: 0;

    z-index: 1;

    ${media.laptop} {
      background-color: ${colors.White};
      right: ${pxToRem(-300)};
    }
  }
`;

export const SubTitle = styled.p`
  ${ParagraphBigStyle};
  color: ${({ theme }) => theme.Text};
  ${media.laptop} {
    text-align: right;
    color: ${(props) => props.textColor};
  }
`;

export const PictureWrapper = styled.div`
  position: relative;
  display: block;
  width: calc(${gridColSizes.mobile} * 9);
  aspect-ratio: 1/1;
  margin-left: calc(${gridColSizes.mobile} * 2);
  border-radius: ${borderRadiusfeatures};
  background-color: ${({ theme }) => theme.BlockBackground};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 10);
    margin-left: calc(5 * ${gridColSizes.tablet});
  }
  ${media.laptop} {
    width: calc(${gridColSizes.laptop} * 10);
    margin-left: calc(2 * ${gridColSizes.laptop});
    margin-right: unset;
  }
  ${media.desktop} {
    width: calc(${gridColSizes.desktop} * 11);
    margin-left: calc(${gridColSizes.desktop});
  }
  ${media.max} {
    width: calc(${gridColSizes.max} * 11);
    margin-left: calc(${gridColSizes.desktop});
  }

  span {
    ${imgCoverParallax}
  }
`;

export const TitlePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  ${media.laptop} {
    flex-direction: row;
  }
  ${media.desktop} {
  }
  ${media.max} {
  }
`;

export const DescriptionWrapper = styled.div`
  display: block;
  position: relative;
  background-color: ${colors.White};
  width: calc(${gridColSizes.mobile} * 8);
  padding: ${pxToRem(24)};
  border-radius: ${borderRadiusfeatures};
  bottom: 4vh;
  transform-origin: top;

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * 9);
    left: calc(${gridColSizes.tablet} * 3);
    padding: ${pxToRem(32)};
    bottom: 20vh;
  }
  ${media.laptop} {
    width: calc(${gridColSizes.laptop} * 12);
    padding: ${pxToRem(40)};
    bottom: 4vh;
  }
  ${media.desktop} {
    position: absolute;
    width: calc(${gridColSizes.desktop} * 9);
    padding: ${pxToRem(48)};
    left: calc(${gridColSizes.desktop} * 4);
  }
  ${media.max} {
    width: calc(${gridColSizes.max} * 9);
    left: calc(${gridColSizes.max} * 4);
    padding: ${pxToRem(48)};
  }
`;

export const Description = styled.p`
  ${ParagraphStyle};
  color: ${(props) => props.textColorNeg};

  ${media.laptop} {
    ${ParagraphBigStyle};
    color: ${(props) => props.textColorNeg};
  }
`;

export const ProjectWrapper = styled(GridWrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${pxToRem(96)};

  ${media.tablet} {
    margin-bottom: ${pxToRem(0)};
  }
  ${media.laptop} {
    margin-bottom: unset;
  }
  ${media.laptop} {
    height: 100vh;
  }
`;

media;
