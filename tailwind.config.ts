import { Config } from 'tailwindcss';

const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
const baseClasses = [
  ...Array.from({ length: 12 }, (_, i) => `grid-cols-${i + 1}`),
  ...Array.from({ length: 12 }, (_, i) => `col-span-${i + 1}`),
  ...Array.from({ length: 12 }, (_, i) => `col-start-${i + 1}`),
  ...Array.from({ length: 13 }, (_, i) => `col-end-${i + 1}`),
];

const safelist = [
  ...baseClasses,
  ...breakpoints.flatMap((bp) => baseClasses.map((cls) => `${bp}:${cls}`)),
];

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: safelist,
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        'display-1': '6rem',
        'display-2': '4.5rem',
      },
    },
  },
  plugins: [
    // heroui({
    //   themes: {
    //     'accessone-ui': {
    //       extend: 'light',
    //       colors: {
    //         background: '#f9fafb',
    //         foreground: '#101928',
    //         primary: {
    //           DEFAULT: '#E54C95',
    //           foreground: '#ffffff',
    //           50: '#FCEDF4',
    //           100: '#F7C8DE',
    //           200: '#F3ADCE',
    //           300: '#EE87B8',
    //           400: '#EA70AA',
    //           500: '#E54C95',
    //           600: '#D04588',
    //           700: '#A3366A',
    //           800: '#7E2A52',
    //           900: '#60203F',
    //         },
    //         secondary: {
    //           DEFAULT: '#36A36F',
    //           foreground: '#ffffff',
    //           50: '#EDFCF5',
    //           100: '#C8F7E0',
    //           200: '#ADF3D1',
    //           300: '#87EEBD',
    //           400: '#70EAB0',
    //           500: '#4CE59C',
    //           600: '#45D08E',
    //           700: '#36A36F',
    //           800: '#2A7E56',
    //           900: '#206042',
    //         },
    //         success: {
    //           DEFAULT: '#0f973d',
    //           foreground: '#ffffff',
    //           50: '#e7f6ec',
    //           100: '#91d6a8',
    //           200: '#5fc381',
    //           300: '#40b869',
    //           400: '#0f973d',
    //           500: '#099137',
    //           600: '#04802e',
    //           700: '#036b26',
    //           800: '#015b20',
    //           900: '#004617',
    //         },
    //         warning: {
    //           DEFAULT: '#f3a218',
    //           foreground: '#ffffff',
    //           50: '#fef6e7',
    //           100: '#f7d394',
    //           200: '#f7c164',
    //           300: '#f5b546',
    //           400: '#f3a218',
    //           500: '#dd900d',
    //           600: '#ad6f07',
    //           700: '#865503',
    //           800: '#664101',
    //           900: '#523300',
    //         },
    //         danger: {
    //           DEFAULT: '#d42620',
    //           foreground: '#ffffff',
    //           50: '#fbeae9',
    //           100: '#eb9b98',
    //           200: '#e26e6a',
    //           300: '#dd524d',
    //           400: '#d42620',
    //           500: '#cb1a14',
    //           600: '#ba110b',
    //           700: '#9e0a05',
    //           800: '#800501',
    //           900: '#591000',
    //         },
    //         focus: '#f56630',
    //         divider: '#98a2b3',
    //       },
    //       layout: {
    //         borderWidth: {
    //           small: '1px',
    //           medium: '2px',
    //           large: '3px',
    //         },
    //         radius: {
    //           small: '4px',
    //           medium: '6px',
    //           large: '8px',
    //         },
    //         disabledOpacity: '0.3',
    //       },
    //     },
    //   },
    // }),
  ],
} satisfies Config;
