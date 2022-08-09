export const size = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  max: 1800,
};

export const media = {
  mobile: `@media (min-width: ${size.mobile}px)`,
  tablet: `@media (min-width: ${size.tablet}px)`,
  laptop: `@media (min-width: ${size.laptop}px)`,
  desktop: `@media (min-width: ${size.desktop}px)`,
  max: `@media (min-width: ${size.max})`,
};

export default media;
