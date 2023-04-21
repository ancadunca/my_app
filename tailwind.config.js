module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx, html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Satoshi"],
      },
      colors: {
        custom: "#3056D3",
        customlight: "#E2E8F0",
        textcolor: "#64748B",
        sourceColor: "#E2E8F0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
