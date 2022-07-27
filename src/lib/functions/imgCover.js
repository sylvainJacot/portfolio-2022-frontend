import { css } from "styled-components";

export const imgCover = css`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-mask-image: -webkit-radial-gradient(white, black); // safari
  img {
    width: 100%;
    height: 100%;
    max-width: unset;
    object-fit: cover;
  }
`;

export const imgCoverParallax = css`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-mask-image: -webkit-radial-gradient(white, black); // safari
  > img {
    width: 110%;
    height: 110%;
    max-width: unset;
    object-fit: cover;
  }
`;
