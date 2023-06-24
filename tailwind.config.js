/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#0654d7',
      'on-primary': '#ffffff',
      'primary-container': '#dbe1ff',
      'on-primary-container': '#00174a',

      'secondary': '#5754a8',
      'on-secondary': '#ffffff',
      'secondary-container': '#e3dfff',
      'on-secondary-container': '#110563',

      'tertiary': '#FF6D2E',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#ffdbce',
      'on-tertiary-container': '#380d00',

      'error': '#ba1a1a',
      'on-error': '#ffffff',
      'error-container': '#ffdad6',
      'on-error-container': '#410002',
      
      'background': '#fefbff',
      'on-background': '#1b1b1f',
      'surface': '#fefbff',
      'on-surface': '#1b1b1f',
      'outline': '#757680',
      'surface-variant': '#e2e2ec',
      'on-surface-variant': '#45464f',
    },
  },
  plugins: [],
}
