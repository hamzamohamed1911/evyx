module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Almarai: ['Almarai', 'sans-serif'],
      },
      animation: {
        'loop-scroll': 'loop-scroll 20s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: 'translateX(-100)' },
          to: { transform: 'translateX(60%)' },
        },
      },
    },
  },
  plugins: [],
};
