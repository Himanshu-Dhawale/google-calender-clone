// /** @type {import('tailwindcss').Config} */


// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   safelist: [
//     'bg-indigo-500',
//     'bg-gray-500',
//     'bg-green-500',
//     'bg-blue-500',
//     'bg-red-500',
//     'bg-purple-500',
//   ],
//   theme: {
//     extend: {
//       gridTemplateColumns : {
//         "1/5" : "1fr 5fr"
//       },
//       // colors: {
//       //   indigo: colors.indigo,
//       //   gray: colors.gray,
//       //   green: colors.green,
//       //   blue: colors.blue,
//       //   red: colors.red,
//       //   purple: colors.purple,
//       // },  
//     },
//   },
//   plugins: [],

// }

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    //Because we made a dynamic class with the label we need to add those clases
    // to the safe list so the purge does not remove that
    safelist: [
      ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
      ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
      ...labelsClasses.map((lbl) => `text-${lbl}-400`)
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}