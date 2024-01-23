/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'blue50': '#EFF8FF',
        'blue100': '#D1E9FF',
        'blue200': '#B2DDFF',
        'bluegray300': '#B3B8DB',
        'bluedark400': '#528BFF',
        'blue400': '#53B1FD',
        'blue600': '#1570EF',
        'blue700': '#175CD3',
        'gray50': '#F9FAFB',
        'gray100': '#F2F4F7',
        'gray200': '#EAECF0',
        'gray300': '#D0D5DD',
        'gray400': '#98A2B3',
        'gray500': '#667085',
        'gray600': '#475467',
        'gray700': '#344054',
        'gray800': '#1D2939',
        'gray900': '#101828',
        'moss300': '#ACDC79',
        'orangedark300': '#FF9C66',
        'primary300': '#D6BBFB',
        'rose300': '#FEA3B4',
        'warning300': '#FEC84B',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

