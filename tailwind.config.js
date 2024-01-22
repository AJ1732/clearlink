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
        'bluedark400': '#528BFF',
        'blue400': '#53B1FD',
        'blue600': '#1570EF',
        'blue700': '#175CD3',
        'gray100': '#F2F4F7',
        'gray300': '#D0D5DD',
        'gray400': '#98A2B3',
        'gray500': '#667085',
        'gray600': '#475467',
        'gray800': '#1D2939',
        'gray900': '#101828',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

