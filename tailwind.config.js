module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        primary01: "#FFD336",
        primary01_dark: "#F7B518",
        primary02: "#1A3966",
        primary02_dark: "#202552",
        primary02_light: "#024BA1",
        primary03: "#1A3047",
        primary03_dark: "#0C2122",
        secondary01: "#258E9F",
        secondary01_light: "#59A3AF",
      },
    },
    container: {
      center: true,
      padding: "182px",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1074px",
      // => @media (min-width: 1024px) { ... }

      // lg: "1438px",
      // // => @media (min-width: 1438px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
