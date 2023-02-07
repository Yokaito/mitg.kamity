export const theme = {
  // breakpoints
  breakpoints: {
    desktop: 1440,
    notebook: 1024,
    tablet: 768,
    mobile: 0,
  },

  // color
  colors: {
    primary: '#e23232',
  },

  // fonts
  fonts: {
    ratio: {
      mobile: '14.40px',
      desktop: '16px',
    },
    size: {
      0: '12px', // Smallest
      1: '14px', // Smaller
      2: '16px', // Mobile   Desktop
      3: '1.25rem', // 18px  20px
      4: '1.5rem', // 22px  24px
      5: '1.875rem', // 27px 30px
      6: '2.5rem', // 36px  40px
      7: '3rem', // 43px  48px
      8: '3.75rem', // 54px 60px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    family: {
      primary: 'ui-monospace, Menlo, Monaco, monospace',
    },
  },
} as const

export default theme
