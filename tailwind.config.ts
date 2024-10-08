import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainAmber: "#CCA34C", 
        lightAmber: "#FDF8E9",
        altAmber: "#D9A536", 
        fadedBlack: "#4A4845", 
        fadedBlackDark: "#252424", 
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], 
        PoppinsSemiBold: ["PoppinsSemiBold", "Poppins", "sans-serif"], 
        Roboto: ["Roboto", "sans-serif"], 
        RobotoBoldCondensed: ["RobotoBoldCondensed", "sans-serif"], 
        Prata: ["Prata", "serif"], 
      }, 
    },
  },
  plugins: [],
};
export default config;
