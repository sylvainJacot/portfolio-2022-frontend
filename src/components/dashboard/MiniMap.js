import React, { useEffect, useRef, useContext } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { pxToRem } from "../../lib/functions/pxToRem";
import styled, { keyframes } from "styled-components";
import media from "../layout/Mediaqueries";
import { googleMapStyles } from "../../assets/json/google-map-styles";
import { colors } from "../primitives/colors";
import { borderRadiusfeatures } from "../layout/CommonValue";
import { transitionDefault } from "../animations/transitions";
import {
  darkGoogleMap,
  lightGoogleMap,
} from "../../lib/styles/googleMapStyles";

const MiniMap = React.memo((props) => {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY_GOOGLE,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 50.5, lng: 4.6 },
        zoom: 7,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
        styles: lightGoogleMap,
      });
    });
  });

  return (
    <>
      <Map ref={googlemap} mapState={props.mapState} />
    </>
  );
});

const Map = styled.div`
  grid-area: map;
  opacity: ${(props) => (props.mapState ? 1 : 0)};

  ${media.laptop} {
  }

  animation: ${(props) =>
    props.mapState
      ? "bondJamesBond 1.2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
      : ""};

  @keyframes bondJamesBond {
    0% {
      transform: translateX(1000px);
    }
    80% {
      transform: translateX(0px);
      border-radius: 50%;
      height: ${pxToRem(80)};
      width: ${pxToRem(80)};
    }
    90% {
      border-radius: ${borderRadiusfeatures};
      height: ${pxToRem(210)};
      width: 100%;
      transform: scaleY(1.05);
    }
    100% {
      border-radius: ${borderRadiusfeatures};
      height: ${pxToRem(200)};
      transform: scaleY(1);
    }
  }
`;

export default MiniMap;
