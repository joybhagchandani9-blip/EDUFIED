/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#172554',      // Deep navy blue
          navyDark: '#0B132B',  // Rich dark navy for headers & accents
          navyLight: '#1E3A8A', // Medium navy
          blue: '#3B82F6',      // Vibrant electric blue
          blueHover: '#2563EB',
          teal: '#14B8A6',      // Fresh teal accent
          tealDark: '#0D9488',
          tealLight: '#2DD4BF',
          slateBg: '#F8FAFC',   // Light blue-gray background
          cardBorder: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 25px -5px rgba(59, 130, 246, 0.25)',
      }
    },
  },
  plugins: [],
}
