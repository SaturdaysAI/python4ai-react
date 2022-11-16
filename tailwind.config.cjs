/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs: '300px',
        sm: '550px',
        md: '680px',
        lg: '1150px',
        xl: '1320px',
        '2xl': '1496px'
      }
    },
    extend: {
      fontFamily: {
        serif: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "image-fade-in": {
          "0%": {
            opacity: 0,
            right: "-100px",
          },
          "100%": {
            opacity: 1,
            right: "0px",
          }
        },
      },
      animation: {
        imageFadeIn: "image-fade-in 2s ease-in-out",
      },
      colors: {
        "charcoal": "#39455E",
        "charcoal-light": "#7886a2",
        "tangerine": "#FF9D5A",
        "gunmetal": "#1A1F2F",
      },
      screens: {
        'xs': '300px',

        'sm': '550px',
        // => @media (min-width: 640px) { ... }

        'md': '680px',
        // => @media (min-width: 768px) { ... }

        'lg': '900px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1120px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1496px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
