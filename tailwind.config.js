/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  mode: 'jit',
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
};
