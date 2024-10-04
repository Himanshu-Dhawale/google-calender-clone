/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        "1/5" : "1fr 5fr"
      },
      // colors: {
      //   indigo: colors.indigo,
      //   gray: colors.gray,
      //   green: colors.green,
      //   blue: colors.blue,
      //   red: colors.red,
      //   purple: colors.purple,
      // },  
    },
  },
  plugins: [],

}

