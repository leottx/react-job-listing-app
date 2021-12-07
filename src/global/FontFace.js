import { createGlobalStyle } from 'styled-components';

// FONTS
import SpartanBold from 'assets/fonts/Spartan-Bold.ttf';
import SpartanMedium from 'assets/fonts/Spartan-Medium.ttf';

const FontFace = createGlobalStyle`
  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  };
  @font-face {
    font-family: 'Spartan';
    src: url(${SpartanMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  };
`;

export default FontFace;
