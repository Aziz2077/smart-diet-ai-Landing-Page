const path = require("path");

module.exports = {
  plugins: {
    "postcss-import": {
      path: [path.resolve(__dirname, "src")],
    },
    tailwindcss: {
      config: path.resolve(__dirname, "tailwind.config.js"),
    },
    autoprefixer: {
      flexbox: "no-2009",
    },
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-properties": false,
      },
      autoprefixer: {
        grid: true,
      },
    },
    cssnano:
      process.env.NODE_ENV === "production"
        ? {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
                normalizeWhitespace: false,
              },
            ],
          }
        : false,
    "postcss-reporter": {
      clearReportedMessages: true,
    },
  },
};
