import styled from 'styled-components';

const pixelToRem = (size) => `${size / 16}rem`;

const fontSize = {
  tabTitle: pixelToRem(18),
  subTitle: pixelToRem(16),
};



const color = {
  black: '#262626',
  gray90: '#4a4a4a',
  gray85: '#6f6f70',
  gray80: '#898989',
  gray70: '#b1b1b1',
  gray60: '#d4d4d4',
  gray40: '#d8d8d8',
  gray30: '#e3e3e3',
  gray20: '#f6f6f6',
  gray10: '#f1f1f1',
  grayWhite: '#FCFCFF',
  white: '#fff',
  navy: '#17194a',
  lightNavy: '#494c98',
  darkNavy: '#191926',
  brightNavy: '#f5f6ff',
  TbrightNavy: '#f0f1ff',
  orange: '#ff5100',
  lightOrange: '#ff844b',
  darkOrange: '#ce4607',
  brightOrange: '#fff5f0',
  TbrightOrange: '#ffede4',
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
};

const theme = {
  fontSize,
  color,
  common,
};

export default theme;
