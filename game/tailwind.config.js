/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '40%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        floatIdle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        popIn: 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        floatIdle: 'floatIdle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
