/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open"],
        roboto: ["Roboto"],
      },
      colors: {
        primary: "#067FB5",
        success: "#20952E",
        danger: "#DD3C4B",
        warning: "#FFC92F",
        complete: "#20952E",
        inprogress: "#FFC92F",
        received: "#E18423",
        declined: "#DD3C4B",
      },
      fontSize: {
        sizefifty: "50px",
        sizefourty: "40px",
      },
    },
  },
  plugins: [],
};
