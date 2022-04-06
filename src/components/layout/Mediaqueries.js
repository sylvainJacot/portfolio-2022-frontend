export const size = {
    mobile: "320px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px"
  };
  
  export const media = {
    mobile: `@media (min-width: ${size.mobile})`,
    tablet: `@media (min-width: ${size.tablet})`,
    laptop: `@media (min-width: ${size.laptop})`,
    desktop: `@media (min-width: ${size.desktop})`,
  }
  
  export default media;