/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/email/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pro-lightgray": "#FAF9F8",
        "pro-orange": "#FC6719",
        "pro-paleorange": "#FBEBD6",
        "pro-green": "#1C4F4A",
        "pro-green1": "#9EB1AC",
        "pro-green2": "#DFE3DE",
        "pro-yellow": "#FFB130",
        "pro-blue": "#1C4A80",
        "pro-paleblue": "#CCDCF6",
        "tg-bg": "#F7F8FA",
      },
    },
  },
};
