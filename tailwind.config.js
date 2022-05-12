module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0fcfec",
          secondary: "#19d3ae",
          accent: "#3a4256",
          "base-100": "#ffffff",
        },
      },
      "bumblebee",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
