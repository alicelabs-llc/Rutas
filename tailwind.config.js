/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          50: '#E6F7F0',
          100: '#C2EBD8',
          200: '#8FD9B8',
          300: '#5CC798',
          400: '#2EB578',
          500: '#00A86B',
          600: '#008F5A',
          700: '#007649',
          800: '#005C38',
          900: '#004327',
        },
        sunset: {
          50: '#FFF0EB',
          100: '#FFD9CC',
          200: '#FFB399',
          300: '#FF8D66',
          400: '#FF6733',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4921',
          800: '#B33817',
          900: '#99270D',
        },
        dark: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#121212',
          700: '#1E1E1E',
          600: '#252525',
          500: '#2D2D2D',
          400: '#3D3D3D',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
}
