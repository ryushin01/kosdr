import type { Config } from "tailwindcss";

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
      },
      zIndex: {
        // NOTE: Design System > Elevation
        // 1: portal
        "1": "1",
        // 10: modal container
        "10": "10",
        // 100: modal backdrop
        "100": "100",
        // 1000: tooltip
        "1000": "1000",
      },
    },
  },
  plugins: [],
} satisfies Config;
