import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { pxToRem } from "../../lib/functions/pxToRem";
import styled from "styled-components";

export default function MiniMap() {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY_GOOGLE,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 50.847642, lng: 4.35717 },
        zoom: 12,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
      });
    });
  });

  return (
    <>
      <Map ref={googlemap} />
    </>
  );
}

const Map = styled.div`
  height: ${pxToRem(400)};
`;
