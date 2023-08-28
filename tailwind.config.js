/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0C1013",
        light: "#F4FAFF",
        red: "#F34213",
        blue: "#00AFB5",
      },
      backgroundImage: {
        abstractShape: "url('/src/assets/abstractShape.jpg')",
      },
    },
    fontFamily: {
      sans: "Roboto",
      serif: "Cormorant Garamond",
    },
    fontSize: {
      "xs-text": "0.875rem",
      text: "1rem",
      highlight: "1.25rem",
      sub: "1.563rem",
      h4: "3.05rem",
      h3: "3.813rem",
      h2: "4.769rem",
      h1: "14.552rem",
      "xs-highlight": "1.2rem",
      "xs-sub": "1.44rem",
      "xs-h3": "2.074rem",
      "xs-h2": "2.488rem",
      "xs-h1": "5.16rem",
      "md-h1": "6.192rem",
    },
  },
  plugins: [],
};
