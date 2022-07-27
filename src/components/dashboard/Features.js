import { forwardRef } from "react";
import styled from "styled-components";
import { gridColSizes } from "../layout/Grid";
import media from "../layout/Mediaqueries";
import Datetime from "./DateTime";
import MiniMap from "./MiniMap";
import RandomApi from "./RandomApi";
import Socials from "./Socials";

const Features = (props, FeaturesRef) => (
  <>
    <FeaturesWrapper ref={FeaturesRef} FeatureState={props.FeatureState}>
      <MiniMap mapState={props.mapState} />
      <RandomApi fact={props.fact} apiState={props.apiState} />
      <Datetime datetimestate={props.datetimestate} />
      <Socials Socials={props.Socials} socialsState={props.socialsState} />
    </FeaturesWrapper>
  </>
);

export default forwardRef(Features);

const FeaturesWrapper = styled.div`
  display: grid;
  width: calc(10 * ${gridColSizes.mobile});
  grid-auto-columns: 1fr;
  grid-row-gap: calc(${gridColSizes.mobile} / 2);
  grid-column-gap: calc(${gridColSizes.mobile} / 2);
  grid-template-areas:
    " . time time time time time time time time time ."
    " map map map map  map api api api api api api"
    " . social social social social social social social social social .";
  ${media.tablet} {
    width: calc(7 * ${gridColSizes.tablet});
    grid-row-gap: calc(${gridColSizes.tablet} / 2);
    grid-column-gap: calc(${gridColSizes.tablet} / 2);
    grid-template-areas:
      " . . time time time time time time"
      " social social social social social social social social"
      " map map map map api api api api";
  }
  ${media.laptop} {
    width: calc(10 * ${gridColSizes.laptop});
    grid-row-gap: calc(${gridColSizes.laptop} / 2);
    grid-column-gap: calc(${gridColSizes.laptop} / 2);
    grid-template-areas:
      ". . . map map map map map map map"
      "social social social social . . . . . ."
      "social social social social time time time time time time"
      "social social social social . . . . . ."
      "social social social social api api api api api api";
  }
  ${media.desktop} {
    width: calc(10 * ${gridColSizes.desktop});
    padding-right: ${gridColSizes.desktop};
    grid-template-areas:
      " . . map map map map map map"
      " social social social . . . . ."
      " social social social time time time time time"
      " social social social . . . . ."
      " social social social api api api api api";
    grid-column-gap: calc(${gridColSizes.desktop} / 2);
    grid-row-gap: calc(${gridColSizes.desktop} / 2);
  }
  ${media.max} {
    padding-right: 0;
    width: calc(10 * ${gridColSizes.max});
    grid-column-gap: calc(${gridColSizes.max} / 2);
    grid-row-gap: calc(${gridColSizes.max} / 2);
  }
`;
