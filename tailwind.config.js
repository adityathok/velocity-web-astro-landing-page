// tailwind.config.js
export default {  
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
}