import { tv } from '@heroui/react';

export const headingVariant = tv({
  base: 'scroll-m-20 tracking-tight',
  variants: {
    variant: {
      ['display-1']: 'text-[3.5rem] tracking-tight leading-none',
      ['display-2']: 'text-5xl tracking-tight leading-none',
      ['title-1']: 'text-[2.5rem] tracking-tight leading-none',
      ['title-2']: 'text-4xl leading-none',
      ['title-3']: 'text-[2rem] leading-tight',
      ['title-4']: 'text-[1.75rem] leading-tight',
      ['title-5']: 'text-2xl leading-tight',
      ['title-6']: 'text-xl leading-tight',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    variant: 'title-1',
    weight: 'semibold',
  },
});

export type HeadingVariantProps = typeof headingVariant;
