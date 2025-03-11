/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",  // Small screens (changed from default 320px)
      md: "768px",  // Tablets (changed from default 768px)
      lg: "1152px", // Laptops (changed from default 1152px)
      xl: "1440px", // Large screens (changed from default 1440px)
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

