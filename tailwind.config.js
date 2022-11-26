/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./src/layouts/**/*/.{js,jsx}",
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
      colors: {
        insta: "#0095f6",
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
