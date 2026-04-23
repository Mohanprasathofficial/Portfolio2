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

      // ✅ ADD THIS (important for fonts)
      fontFamily: {
        sora: ["var(--font-sora)"],
        figtree: ["var(--font-figtree)"],
        quicksand: ["var(--font-quicksand)"],
      },
    },
  },
  plugins: [],
} satisfies Config;