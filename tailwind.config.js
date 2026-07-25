/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // slate-900
        foreground: "#f8fafc", // slate-50
        card: "#1e293b", // slate-800
        accent: "#3b82f6", // blue-500
        muted: "#94a3b8", // slate-400
        border: "#334155", // slate-700
      },
    },
  },
  plugins: [],
};
