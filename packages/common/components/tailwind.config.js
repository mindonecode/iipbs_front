/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-mode='dark']"],
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./.storybook/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        label: "var(--label)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-parent": {
          from: { transform: "translate(-50%,-50%) rotate(0deg)" },
          to: { transform: "translate(-50%,-50%) rotate(360deg)" },
        },
        "spin-child": {
          from: { transform: "translate(0,0) rotate(0deg)" },
          to: { transform: "translate(0,0) rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-parent": "spin-parent 6s linear infinite",
        "spin-child": "spin-child 1s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(.25turn, #2094fa, #00e5dd)",
        "gradient-blue-hover":
          "linear-gradient(.25turn, #2298ff, #01dcda, #00e8b4)",
        "gradient-green": "linear-gradient(.25turn, #00bad0, #00eb6f)",
        "gradient-green-hover": "linear-gradient(.25turn, #00bad0, #12fe81)",
        "gradient-red": "linear-gradient(.25turn, #ff487c, #ffc425)",
        "gradient-red-hover": "linear-gradient(.25turn, #ff487c, #ffea3a)",
        "gradient-purple": "linear-gradient(.25turn, #be30d7, #ff9264)",
        "gradient-purple-hover": "linear-gradient(.25turn, #be30d7, #ffaf5a)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
