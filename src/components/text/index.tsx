import { ComponentPropsWithRef, ForwardedRef } from 'react';
import { cn, VariantProps } from '@heroui/react';

import { DistributiveOmit, fixedForwardRef } from '@/utils/components';

import { textVariant, TextVariantProps } from './variants';

type TextTag = 'p' | 'div' | 'span';

type TextProps<TAs extends TextTag> = {
  component?: TAs;
} & DistributiveOmit<
  ComponentPropsWithRef<TextTag extends TAs ? 'p' : TAs>,
  'component'
> &
  VariantProps<TextVariantProps>;

const UnwrappedText = <TAs extends TextTag>(
  props: TextProps<TAs>,
  ref: ForwardedRef<never>
) => {
  const {
    component: Component = 'p',
    caption,
    className,
    children,
    color,
    align,
    italic,
    strikethrough,
    size,
    weight,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      ref={ref}
      className={cn(
        textVariant({
          caption,
          className,
          color,
          align,
          italic,
          size,
          strikethrough,
          weight,
        })
      )}
    >
      {children}
    </Component>
  );
};

export const Text = fixedForwardRef(UnwrappedText);
