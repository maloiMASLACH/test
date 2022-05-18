import { customTheme } from '.';

export const toKebabCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const parseObjToCSS = (obj: { [key: string]: string }) => {
  return Object.keys(obj)
    .map((key) => `${toKebabCase(key)}: ${obj[key]};`)
    .join(' ');
};

export const parseMedia = (media: { [key: string]: { [key: string]: string } }) => {
  const breakpointsKeys = customTheme.breakpoints.keys;
  const breakpointsValues: { [key: string]: number } = customTheme.breakpoints.values;
  const unit = customTheme.breakpoints.unit;

  return breakpointsKeys
    .map((key: string) =>
      media[key]
        ? `
    @media (max-width: ${breakpointsValues[key]}${unit}) {
      ${parseObjToCSS(media[key])}
    }
  `
        : ''
    )
    .join(' ');
};
