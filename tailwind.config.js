/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: "#07091E",
        bannerDark: "#060928",
      },
      backgroundImage: (theme) => ({
        "custom-gradient": `linear-gradient(to right, ${theme(
          "colors.bannerDark"
        )}, ${theme("colors.darkBlue")})`,
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#ffffff9f",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke-color": "#2d2d2d",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
