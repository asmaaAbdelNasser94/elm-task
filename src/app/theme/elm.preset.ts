import { definePreset, palette } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

/** Saudi green from the design: button and stepper `#1b8354`. */
export const elmPreset = definePreset(Lara, {
  semantic: {
    primary: palette('#1b8354'),
  },
});
