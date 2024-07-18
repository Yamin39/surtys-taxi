/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FFC000",
      },
      fontFamily: {
        poppins: `"Poppins", sans-serif`,
      },
    },
  },
  plugins: [require("daisyui")],
};
