/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'rubik-13': ['13px', { lineHeight: '18px' }],
        'rubik-14': ['14px', { lineHeight: '22px' }],
        'rubik-15': ['15px', { lineHeight: '19px' }],
        'rubik-16': ['16px', { lineHeight: '24px' }],
        'rubik-18': ['18px', { lineHeight: '30px' }],
        'rubik-28': ['28px', { lineHeight: '34px' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
      },
      textTransform: {
        titlecase: 'capitalize',
      },
      colors: {
        textColor: '#1D2226',
      },
    },
  },
  plugins: [],
};
