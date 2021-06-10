module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        fsroot: "15px",
        fsbase: "1rem",
        fslarge: "1.2rem",
        fssmall: "0.85rem",
        fsmini: "0.65rem",
        fstext: "1rem",
        fslabel: "1rem",
        fstitle: "1.4rem",
        fsh1: "3rem",
        fsh2: "2.5rem",
        fsh3: "1.7rem",
        fsh4: "1.3rem",
        fsh5: "1.1rem",
      },
      FontWeight: {
        fwbase: "500",
        fwbold: "600",
      },
      colors: {
        bwhite: "#ffffff",
        bblack: "#141414",
        bpink: "#ff4092",
        bpurple: "#7b1173",
        bviolet: "#e000cf",
        bgreydark: "#303030",
        bgrey: "#41474e",
        bgreylight: "#8b98a9",
        bgreylighter: "#e2e2e2",
        bgreydimmed: "#f7f7f7",
        bgradient: "linear-gradient(to right bottom #7b1173, #ff4092)",
        balertgreen: "#5fb359",
        balertred: "#d80606",
        balertorange: "#b35f36",
        balertyellow: "#eac146",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// https://tailwindcss.com/docs/font-size
//   module.exports = {
//     theme: {
//       fontSize: {
//        'xs': '.75rem',
//        'sm': '.875rem',
//        'tiny': '.875rem',
//         'base': '1rem',
//         'lg': '1.125rem',
//         'xl': '1.25rem',
//         '2xl': '1.5rem',
//        '3xl': '1.875rem',
//        '4xl': '2.25rem',
//         '5xl': '3rem',
//         '6xl': '4rem',
//        '7xl': '5rem',
//       }
//     }
//   }
