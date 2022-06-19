import styled from "styled-components";
import media from "./Mediaqueries";

export const gridColCount = {
  mobile: 11,
  tablet: 17,
  laptop: 23,
  desktop: 23,
};

export const gridColSizes = {
  mobile: 90 / gridColCount.mobile + "vw",
  tablet: 95 / gridColCount.tablet + "vw",
  laptop: 95 / gridColCount.laptop + "vw",
  desktop: 95 / gridColCount.desktop + "vw",
  max: "8rem",
};

export const gridSizes = {
  mobile: gridColCount.mobile * gridColSizes.mobile + "vw",
  tablet: gridColCount.tablet * gridColSizes.tablet + "vw",
  laptop: gridColCount.laptop * gridColSizes.laptop + "vw",
  desktop: gridColCount.desktop * gridColSizes.desktop + "vw",
  max: gridColCount.desktop * gridColSizes.max,
};

export const gridMargins = {
  mobile: `calc((100vw - (${gridColCount.mobile} * ${gridColSizes.mobile})) / 2 )`,
  tablet: `calc((100vw - (${gridColCount.tablet} * ${gridColSizes.tablet})) / 2 )`,
  laptop: `calc((100vw - (${gridColCount.laptop} * ${gridColSizes.laptop})) / 2 )`,
  desktop: `calc((100vw - (${gridColCount.desktop} * ${gridColSizes.desktop})) / 2 )`,
  max: `calc((100vw - (${gridColCount.max} * ${gridColSizes.max})) / 2 )`,
};

export const GridWrapper = styled.div`
  width: calc(${gridColSizes.mobile} * ${gridColCount.mobile});
  margin: auto;

  ${media.tablet} {
    width: calc(${gridColSizes.tablet} * ${gridColCount.tablet});
  }
  ${media.laptop} {
    width: calc(${gridColSizes.laptop} * ${gridColCount.laptop});
  }
  ${media.desktop} {
    width: calc(${gridColSizes.desktop} * ${gridColCount.desktop});
  }
  ${media.max} {
    width: calc(${gridColSizes.max} * ${gridColCount.desktop});
  }
`;

export default function Grid(props) {
  return (
    <>
      <GridWrapper>{props.children}</GridWrapper>
    </>
  );
}
