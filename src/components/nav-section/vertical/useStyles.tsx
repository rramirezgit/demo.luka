import type { Estilos } from 'src/store/demoFormStore';

import { useCallback } from 'react';

const useSetStyles = () => {
  const setVariables = useCallback((styles: Estilos) => {
    /* General */
    if (styles?.color) {
      document.documentElement.style.setProperty('--color-radio-checked', styles.color);
      document.documentElement.style.setProperty('--luka-button-bgColor', styles.color);
    }

    /* Input */
    if (styles?.input?.borderColor) {
      document.documentElement.style.setProperty(
        '--luka-input-border-color',
        styles.input.borderColor
      );
    }
    if (styles?.input?.backgroundColor) {
      document.documentElement.style.setProperty(
        '--luka-input-bgColor',
        styles.input.backgroundColor
      );
    }
    if (styles?.input?.color) {
      document.documentElement.style.setProperty('--luka-input-textColor', styles.input.color);
    }
    if (styles?.input?.fontSize) {
      document.documentElement.style.setProperty(
        '--luka-input-font-size',
        `${styles.input.fontSize}px`
      );
    }
    if (styles?.input?.radio) {
      document.documentElement.style.setProperty(
        '--luka-input-border-radio',
        `${styles.input.radio}px`
      );
      document.documentElement.style.setProperty(
        '--luka-carousel-border-radius',
        `${styles.input.radio}px`
      );
    }
    if (styles?.input?.height) {
      document.documentElement.style.setProperty('--luka-input-height', `${styles.input.height}px`);
    }
    if (styles?.input?.weight) {
      document.documentElement.style.setProperty(
        '--luka-input-border-weigth',
        `${styles.input.weight}px`
      );
    }

    /* Button */
    if (styles?.botton?.backgroundColor) {
      document.documentElement.style.setProperty(
        '--luka-button-bgColor',
        styles.botton.backgroundColor
      );
    }
    if (styles?.botton?.color) {
      document.documentElement.style.setProperty('--luka-button-textColor', styles.botton.color);
    }
    if (styles?.botton?.radio) {
      document.documentElement.style.setProperty('--luka-button-radio', `${styles.botton.radio}px`);
    }
    if (styles?.botton?.fontSize) {
      document.documentElement.style.setProperty(
        '--luka-button-textSize',
        `${styles.botton.fontSize}px`
      );
    }
    if (styles?.botton?.height) {
      document.documentElement.style.setProperty('--luka-button-alto', `${styles.botton.height}px`);
    }

    /* Font */
    if (styles?.fontFamily) {
      document.documentElement.style.setProperty('--luka-font-family', styles.fontFamily);
    }

    /* Borders */
    // if (styles?.borderPadding) {
    //   document.documentElement.style.setProperty(
    //     '--luka-form-border-padding',
    //     styles.borderPadding
    //   );
    // }
    // if (styles?.formBorder) {
    //   document.documentElement.style.setProperty('--luka-form-border', styles.formBorder);
    // }

    /* Carousel */
    // if (styles?.carrusel?.borderRadius) {
    //   document.documentElement.style.setProperty(
    //     '--luka-carousel-border-radius',
    //     `${styles.carrusel.borderRadius}px`
    //   );
    // }
    if (styles?.carrusel?.border) {
      document.documentElement.style.setProperty('--luka-carousel-border', styles.carrusel.border);
    }
    if (styles?.carrusel?.borderColor) {
      document.documentElement.style.setProperty(
        '--luka-carousel-border-color',
        styles.carrusel.borderColor
      );
    }
    if (styles?.carrusel?.boxShadow) {
      document.documentElement.style.setProperty(
        '--luka-carousel-box-shadow',
        styles.carrusel.boxShadow
      );
    }
  }, []);

  return { setVariables };
};

export default useSetStyles;
