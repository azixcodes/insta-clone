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
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
