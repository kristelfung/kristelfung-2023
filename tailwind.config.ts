import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
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
        highlight: "var(--highlight)",
      },
      maxWidth: {
        container: "960px",
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontSize: "1.5rem",
            },
            li: {
              fontSize: "1.5rem",
            },
            h1: {
              marginTop: "3rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
