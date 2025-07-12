import { forwardRef } from 'react';

export type FixedForwardRef = <T, P = Record<string, unknown>>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

export type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends unknown
  ? Omit<T, TOmitted>
  : never;

export const fixedForwardRef = forwardRef as FixedForwardRef;