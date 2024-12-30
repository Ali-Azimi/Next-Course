/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    // extend: {
    //   borderWidth: {
    //     3: '14px',
    //   },
    // },
    // spacing: {
    //   8: '18px',
    // },
    // borderRadius: {
    //   harchi: '8px',
    // },
    // margin: {
    //   4: '14px',
    // },
    screens: {
      sm: '576px',
      md: '900px',
      lg: '1200px',
    },
    extend: {
      gridTemplateColumns: {
        banner: '200px 1fr 2fr',
      },
      animation: {
        harchi: 'flash 1s ease-in-out infinite',
      },
      keyframes: {
        flash: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
