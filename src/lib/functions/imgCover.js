import { css } from 'styled-components';

export const imgCover = css`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-mask-image: -webkit-radial-gradient(white, black); // à ajouter pour que le overflow fonctionne sur safari
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
`