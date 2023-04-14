import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      green100: '#B0FF94',
      purple100: '#2A095F',
      purple200: '#3D02BD',
      purple300: '#E25BFF',
      purple400: '#DDB1FF',
      purple900: '#FBEFFF',
    },
  },
});
