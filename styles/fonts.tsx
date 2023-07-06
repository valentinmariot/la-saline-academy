import { Global } from '@emotion/react';

const fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: Helvetica;
        font-stretch: normal;
        font-style: normal;
        font-variant: normal;
        font-weight: 300;
        src: url('../fonts/Helvetica.woff2') format('woff2');
      }

      @font-face {
        font-family: Gotham;
        font-stretch: normal;
        font-style: normal;
        font-variant: normal;
        font-weight: 500;
        src: url('../fonts/Gotham.woff2') format('woff2');
      }
    `}
  />
);

export default fonts;