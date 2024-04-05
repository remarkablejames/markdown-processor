// import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/preline/preline.js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-body": "var(--tw-prose-invert-body)",
            "--tw-prose-headings": "var(--tw-prose-invert-headings)",
            "--tw-prose-links": "var(--tw-prose-invert-links)",
            "--tw-prose-links-hover": "var(--tw-prose-invert-links-hover)",
            "--tw-prose-underline": "var(--tw-prose-invert-underline)",
            "--tw-prose-underline-hover":
              "var(--tw-prose-invert-underline-hover)",
            "--tw-prose-bold": "var(--tw-prose-invert-bold)",
            "--tw-prose-counters": "var(--tw-prose-invert-counters)",
            "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
            "--tw-prose-hr": "var(--tw-prose-invert-hr)",
            "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
            "--tw-prose-captions": "var(--tw-prose-invert-captions)",
            "--tw-prose-code": "var(--tw-prose-invert-code)",
            "--tw-prose-code-bg": "var(--tw-prose-invert-code-bg)",
            "--tw-prose-pre-code": "var(--tw-prose-invert-pre-code)",
            "--tw-prose-pre-bg": "var(--tw-prose-invert-pre-bg)",
            "--tw-prose-pre-border": "var(--tw-prose-invert-pre-border)",
            "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
            "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)",
          },
        },
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.zinc.600"),
            "--tw-prose-headings": theme("colors.zinc.900"),
            "--tw-prose-links": theme("colors.teal.700"),
            "--tw-prose-links-hover": theme("colors.teal.600"),
            "--tw-prose-underline": theme("colors.teal.500 / 0.2"),
            "--tw-prose-underline-hover": theme("colors.teal.500"),
            "--tw-prose-bold": theme("colors.zinc.900"),
            "--tw-prose-counters": theme("colors.zinc.900"),
            "--tw-prose-bullets": theme("colors.zinc.900"),
            "--tw-prose-hr": theme("colors.zinc.100"),
            "--tw-prose-quote-borders": theme("colors.zinc.200"),
            "--tw-prose-captions": theme("colors.zinc.400"),
            "--tw-prose-code": theme("colors.zinc.700"),
            "--tw-prose-code-bg": theme("colors.zinc.300 / 0.2"),
            "--tw-prose-pre-code": theme("colors.zinc.100"),
            "--tw-prose-pre-bg": theme("colors.zinc.900"),
            "--tw-prose-pre-border": "transparent",
            "--tw-prose-th-borders": theme("colors.zinc.200"),
            "--tw-prose-td-borders": theme("colors.zinc.100"),

            "--tw-prose-invert-body": theme("colors.zinc.400"),
            "--tw-prose-invert-headings": theme("colors.zinc.200"),
            "--tw-prose-invert-links": theme("colors.teal.400"),
            "--tw-prose-invert-links-hover": theme("colors.teal.400"),
            "--tw-prose-invert-underline": theme("colors.teal.400 / 0.3"),
            "--tw-prose-invert-underline-hover": theme("colors.teal.400"),
            "--tw-prose-invert-bold": theme("colors.zinc.200"),
            "--tw-prose-invert-counters": theme("colors.zinc.200"),
            "--tw-prose-invert-bullets": theme("colors.zinc.200"),
            "--tw-prose-invert-hr": theme("colors.zinc.700 / 0.4"),
            "--tw-prose-invert-quote-borders": theme("colors.zinc.500"),
            "--tw-prose-invert-captions": theme("colors.zinc.500"),
            "--tw-prose-invert-code": theme("colors.zinc.300"),
            "--tw-prose-invert-code-bg": theme("colors.zinc.200 / 0.05"),
            "--tw-prose-invert-pre-code": theme("colors.zinc.100"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 0.4)",
            "--tw-prose-invert-pre-border": theme("colors.zinc.200 / 0.1"),
            "--tw-prose-invert-th-borders": theme("colors.zinc.700"),
            "--tw-prose-invert-td-borders": theme("colors.zinc.800"),

            // Base
            color: "var(--tw-prose-body)",
            lineHeight: theme("lineHeight.7"),
            /*   '> *': {
                                                               marginTop: theme('spacing.10'),
                                                               marginBottom: theme('spacing.10'),
                                                             },
                                                             */
            p: {
              color: "var(--tw-prose-body)",
              leading: theme("spacing.5"),
              "&:not(:first-child)": {
                marginTop: theme("spacing.2"),
              },
            },
            // format image when it is the only child of a paragraph
            "p > img:only-child": {
              // make image full width
              width: "100%",
              // scale image down by 10%
              // transform: 'scale(0.5)',
            },

            // Headings
            h1: {
              // Scroll margin of 20
              scrollMargin: "20px",

              // Bottom border with 2 units padding
              // borderBottom: '1px solid #e5e7eb', // Use your preferred border color
              paddingBottom: "2px",

              // Font size 3xl, semibold font weight, tight tracking
              fontSize: "1.875rem", // Equivalent to Tailwind's text-3xl
              fontWeight: "600", // Equivalent to Tailwind's font-semibold
              letterSpacing: "-0.0125em", // Equivalent to Tailwind's tracking-tight

              // First margin-top set to 0
              marginTop: "0",
            },
            " h3": {
              color: "var(--tw-prose-headings)",
              fontWeight: theme("fontWeight.semibold"),
            },
            h2: {
              // Scroll margin of 20
              scrollMargin: "20px",

              // Font size 2xl, semibold font weight, tight tracking
              fontSize: "1.5rem", // Equivalent to Tailwind's text-2xl
              fontWeight: "600", // Equivalent to Tailwind's font-semibold
              letterSpacing: "-0.0125em", // Equivalent to Tailwind's tracking-tight
            },
            h3: {
              fontSize: theme("fontSize.base")[0],
              lineHeight: theme("lineHeight.7"),
              marginTop: theme("spacing.regular"),
              marginBottom: theme("spacing.extraSmall"),
              fontWeight: theme("fontWeight.medium"),
            },
            ":is(h2, h3) + *": {
              marginTop: 0,
            },
            // class katex
            ".katex": {
              textAlign: "center",
              marginTop: theme("spacing.3"),
              marginBottom: theme("spacing.3"),
            },

            // Images
            img: {
              borderRadius: theme("borderRadius.md"),
            },

            // Inline elements
            a: {
              color: "#1F51FF",
              fontWeight: theme("fontWeight.normal"),
              textDecoration: "none",
              // textDecorationColor: "var(--tw-prose-underline)",
              transitionProperty: "color, text-decoration-color",
              transitionDuration: theme("transitionDuration.150"),
              transitionTimingFunction: theme(
                "transitionTimingFunction.in-out"
              ),
            },
            "a:hover": {
              color: "var(--tw-prose-links-hover)",
              textDecorationColor: "var(--tw-prose-underline-hover)",
            },
            strong: {
              color: "var(--tw-prose-bold)",
              fontWeight: theme("fontWeight.semibold"),
            },
            code: {
              display: "inline-block",
              color: "var(--tw-prose-code)",
              fontSize: theme("fontSize.base")[0],
              fontWeight: theme("fontWeight.bold"),
              backgroundColor: "var(--tw-prose-code-bg)",
              borderRadius: theme("borderRadius.lg"),
              paddingLeft: theme("spacing.1"),
              paddingRight: theme("spacing.1"),
              // code blocks with line numbers
              counterReset: "line",
            },
            "a code": {
              color: "inherit",
            },
            ":is(h2, h3) code": {
              fontWeight: theme("fontWeight.bold"),
            },

            // Quotes
            blockquote: {
              color: "#000000",
              paddingLeft: theme("spacing.6"),
              fontStyle: "normal",
              marginTop: theme("spacing.14"),
              marginBottom: theme("spacing.14"),
              fontSize: theme("fontSize.sm")[0],
              fontWeight: theme("fontWeight.normal"),
              border: "1px solid #e5e7eb",
              borderColor: "#e5e7eb",
              borderRadius: theme("borderRadius.md"),
              //  give the blockquote a background color of transparent
              backgroundColor: "transparent",
              // change background color to transparent when in dark mode
              "@media (prefers-color-scheme: dark)": {
                backgroundColor: "transparent",
                // change border color to a slight transparent white
                // borderColor: "rgba(255, 255, 255, 0.3)",
              },
            },

            // Figures
            figcaption: {
              color: "var(--tw-prose-captions)",
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("lineHeight.6"),
              marginTop: theme("spacing.3"),
            },
            "figcaption > p": {
              margin: 0,
            },

            // Lists
            ul: {
              listStyleType: "disc",
            },
            ol: {
              listStyleType: "decimal",
            },
            "ul, ol": {
              paddingLeft: theme("spacing.6"),
            },
            li: {
              marginTop: theme("spacing.extraSmall"),
              marginBottom: theme("spacing.extraSmall"),
              paddingLeft: theme("spacing[3.5]"),
            },
            "li::marker": {
              fontSize: theme("fontSize.sm")[0],
              fontWeight: theme("fontWeight.semibold"),
            },
            "ol > li::marker": {
              color: "var(--tw-prose-counters)",
            },
            "ul > li::marker": {
              color: "var(--tw-prose-bullets)",
            },
            "li :is(ol, ul)": {
              marginTop: theme("spacing.4"),
              marginBottom: theme("spacing.4"),
            },
            "li :is(li, p)": {
              marginTop: theme("spacing.3"),
              marginBottom: theme("spacing.3"),
            },

            // Code blocks
            pre: {
              color: "var(--tw-prose-pre-code)",
              fontSize: theme("fontSize.base")[0],
              fontWeight: theme("fontWeight.medium"),
              backgroundColor: "var(--tw-prose-pre-bg)",
              borderRadius: theme("borderRadius.md"),
              padding: theme("spacing.6"),
              marginTop: theme("spacing.0"),
              overflowX: "auto",
              border: "1px solid",
              borderColor: "var(--tw-prose-pre-border)",
            },
            "pre code": {
              display: "inline",
              color: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              backgroundColor: "transparent",
              borderRadius: 0,
              padding: 0,
            },
            // Code blocks with line numbers
            "code > [data-line]::before": {
              counterIncrement: "line",
              content: "counter(line)",
              display: "inline-block",
              width: "1rem",
              marginRight: "2rem",
              textAlign: "right",
              color: "gray",
            },
            "code[data-line-numbers-max-digits='2'] > [data-line]::before": {
              width: "2rem",
            },
            "code[data-line-numbers-max-digits='3'] > [data-line]::before": {
              width: "3rem",
            },

            // Horizontal rules
            hr: {
              marginTop: theme("spacing.20"),
              marginBottom: theme("spacing.20"),
              borderTopWidth: "1px",
              borderColor: "var(--tw-prose-hr)",
              "@screen lg": {
                marginLeft: `calc(${theme("spacing.12")} * -1)`,
                marginRight: `calc(${theme("spacing.12")} * -1)`,
              },
            },

            // embedded
            iframe: {
              borderRadius: "0.5rem",
              // padding: '1rem', // adjust as needed
              // margin: '1rem', // adjust as needed
              width: "100%",
              height: "30rem",
            },

            // Tables
            table: {
              marginTop: theme("spacing.13"),
              width: "100%",
              // tableLayout: 'auto',
              textAlign: "left",
              fontSize: theme("fontSize.lg")[0],
            },
            thead: {
              borderBottomWidth: "1px",
              borderBottomColor: "var(--tw-prose-th-borders)",
            },
            "thead th": {
              color: "var(--tw-prose-headings)",
              fontWeight: theme("fontWeight.semibold"),
              verticalAlign: "bottom",
              paddingBottom: theme("spacing.2"),
            },
            "thead th:not(:first-child)": {
              paddingLeft: theme("spacing.2"),
            },
            "thead th:not(:last-child)": {
              paddingRight: theme("spacing.2"),
            },
            "tbody tr": {
              borderBottomWidth: "1px",
              borderBottomColor: "var(--tw-prose-td-borders)",
            },
            "tbody tr:last-child": {
              borderBottomWidth: 0,
            },
            "tbody td": {
              verticalAlign: "baseline",
            },
            tfoot: {
              borderTopWidth: "1px",
              borderTopColor: "var(--tw-prose-th-borders)",
            },
            "tfoot td": {
              verticalAlign: "top",
            },
            ":is(tbody, tfoot) td": {
              paddingTop: theme("spacing.2"),
              paddingBottom: theme("spacing.2"),
            },
            ":is(tbody, tfoot) td:not(:first-child)": {
              paddingLeft: theme("spacing.2"),
            },
            ":is(tbody, tfoot) td:not(:last-child)": {
              paddingRight: theme("spacing.2"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      // Configure the typography options
      removeMargins: true, // Remove default margins from headings
    }),
  ],
};

export default config;
