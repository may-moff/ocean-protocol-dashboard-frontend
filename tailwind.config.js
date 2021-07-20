module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        default: '4px 4px 20px rgb(0 0 0 / 10%)'
      },
      fontSize: {
        fsroot: '15px',
        fsbase: '1rem',
        fslarge: '1.2rem',
        fssmall: '0.85rem',
        fsmini: '0.65rem',
        fstext: '1rem',
        fslabel: '1rem',
        fstitle: '1.4rem',
        fsh1: '3rem',
        fsh2: '2.5rem',
        fsh3: '1.7rem',
        fsh4: '1.3rem',
        fsh5: '1.1rem'
      },
      fontWeight: {
        fwbase: '500',
        fwbold: '600'
      },
      breakPoint: {
        bpsmall: '640px',
        bpmedium: '860px',
        bplarge: '1140px',
        bphuge: '1400px'
      },
      spacer: {
        spacer: '2rem'
      },
      spacing: {
        108: '27rem',
        118: '29.5rem',
        128: '32rem',
        138: '34.5rem',
        148: '48rem',
        155: '55rem'
      },
      borderRadius: {
        bradius: '0.2rem'
      },
      layout: {
        lmaxwidth: '85rem'
      },
      checkboxSize: {
        chsize: '1.6rem'
      },
      colors: {
        bwhite: '#ffffff',
        bblack: '#141414',
        bpink: '#ff4092',
        bpurple: '#7b1173',
        bviolet: '#e000cf',
        bgreydark: '#303030',
        bgrey: '#41474e',
        bgreylight: '#8b98a9',
        bgreylighter: '#e2e2e2',
        bgreydimmed: '#f7f7f7',
        bgradient: 'linear-gradient(to right bottom #7b1173, #ff4092)',
        balertgreen: '#5fb359',
        balertred: '#d80606',
        balertorange: '#b35f36',
        balertyellow: '#eac146',
        colorprimary: '#ff4092',
        colorsecondary: '#8b98a9'
      }
    }
  },
  variants: {
    extend: {
      animation: ['motion-safe']
    }
  },
  plugins: []
}
