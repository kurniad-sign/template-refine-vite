import { format } from 'date-fns';

export function formatPhoneNumber(phone: string) {
  if (!/^\d+$/.test(phone)) return phone; // simple guard for exactly 9 digits
  const area = phone.slice(0, 3);
  const middle = phone.slice(3, 6);
  const last = phone.slice(6);
  return `(${area}) ${middle}-${last}`;
}

export const dateTimeFormater = (date: number | string | Date) => {
  if (typeof date === 'string') {
    // If the ISO string does not contain a time part, add "T00:00:00"
    if (!date.includes('T')) {
      return new Date(date + 'T00:00:00');
    }
  }
  return new Date(date);
};

export const formatDate = (dateString?: string | null) => {
  if (!dateString) return '-';

  return format(dateTimeFormater(dateString), 'MM/dd/yyyy');
};
