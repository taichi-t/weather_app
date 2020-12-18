module.exports = {
  purge: ['./src/**/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        skeleton: 'var(--color-skeleton)',
        paper: 'var(--color-paper)',
        border: 'var(--color-border)',
        primaryText: 'var(--color-primary-text)',
        secondaryText: 'var(--color-secondary-text)',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
    },
  },
  variants: {},
  plugins: [],
};
