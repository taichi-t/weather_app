module.exports = {
  purge: ['./src/**/*'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        skeleton: 'var(--color-skeleton)',
        paper: 'var(--color-paper)',
        key: 'var(--color-key)',
        primaryText: 'var(--color-primary-text)',
        secondaryText: 'var(--color-secondary-text)',
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
      fontSize: {
        super: 160,
      },
      screens: {
        mobile: { max: '767px' },
        tablet: { min: '768px', max: '919px' },
        desktop: { min: '920px' },
      },
    },
  },
  variants: {},
  plugins: [],
};
