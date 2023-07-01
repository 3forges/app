#!/bin/bash


yarn add nativewind
yarn add --dev tailwindcss

# ---
# Run 'npx tailwindcss init' to create a tailwind.config.js file
npx tailwindcss init


cat <<EOF >./tailwind.config.js
module.exports = {
content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# babel.config.js
cat <<EOF >./babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
EOF
