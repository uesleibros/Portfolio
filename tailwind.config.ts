/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": {"max": "700px"},
        // => @media (min-width: 640px) { ... }

        "md": {"min": "768px", "max": "1023px"},
        // => @media (min-width: 768px) { ... }

        "lg": {"min": "1024px", "max": "1279px"},
        // => @media (min-width: 1024px) { ... }

        "xl": {"min": "1280px", "max": "1535px"},
        // => @media (min-width: 1280px) { ... }

        "2xl": {"min": "1536px"},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};