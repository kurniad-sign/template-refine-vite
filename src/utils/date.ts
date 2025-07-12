import type { RangeValue } from '@heroui/react';
import { parseDate, type DateValue } from '@internationalized/date';
import { format } from 'date-fns';

export function getDateNow() {
  return format(new Date(), 'yyyy-MM-dd');
}

export const getParsedRange = (
  val: unknown
): RangeValue<DateValue> | null | undefined => {
  if (
    val &&
    typeof val === 'object' &&
    'start' in val &&
    'end' in val &&
    typeof val.start === 'string' &&
    typeof val.end === 'string'
  ) {
    return {
      start: parseDate(val.start),
      end: parseDate(val.end),
    };
  }

  return undefined;
};
