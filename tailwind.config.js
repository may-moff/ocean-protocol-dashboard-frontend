module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        bgradient: "linear-gradient(to right bottom, #7b1173, #ff4092)",
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
bgradient: "linear-gradient(to right bottom, #7b1173, #ff4092)",