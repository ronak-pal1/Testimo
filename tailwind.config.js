/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "radial-gradient(circle,rgba(124, 94, 249, 0.5) 5%, rgba(255, 255, 255, 0.8) 80%)",
      },
    },
  },
  plugins: [],
};
