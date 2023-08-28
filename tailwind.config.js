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
    },
    fontFamily: {
      sans: "Roboto",
      serif: "Cormorant Garamond",
    },
    fontSize: {
      "xs-text": "0.875 rem",
      text: "1 rem",
      highlight: "1.25 rem",
      sub: "1.563 rem",
      h4: "3.05 rem",
      h3: "3.813 rem",
      h2: "4.769 rem",
      h1: "14.552rem",
      "xs-highlight": "1.2 rem",
      "xs-sub": "1.44rem",
      "xs-h3": "2.074 rem",
      "xs-h2": "2.488 rem",
      "xs-h1": "5.16rem rem",
      "md-h1": "6.192 rem",
    },
  },
  plugins: [],
};
