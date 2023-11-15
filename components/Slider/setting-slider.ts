import styles from './slider.module.scss';

export const setting = {
  loop: true,
  spaceBetween: '10%',
  autoplay: { delay: 2000 },
  pagination: {
    el: `.${styles.slider__pagination}`,
    clickable: true,
  },
  breakpoints: {
    100: { direction: "horizontal" as const },
    769: { direction: "vertical" as const },
  }
};
