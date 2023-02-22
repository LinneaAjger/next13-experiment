/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibmPlexSans: ["var(--font-ibmPlexSans)"],
        creepster: ["var(--font-creepster)"],
        quicksand: ["var(--font-quicksand)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
    },
  },
  plugins: [],
}
