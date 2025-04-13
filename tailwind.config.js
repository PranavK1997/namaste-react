/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5722", // custom color
      },
    },
  },
  plugins: [],
};
