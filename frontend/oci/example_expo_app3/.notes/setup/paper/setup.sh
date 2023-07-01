#!/bin/bash

yarn add react-native-paper react-native-safe-area-context

npx pod-install


# ---
# We already added and set up [react-native-vector-icons] in our expo project
# yarn add react-native-vector-icons


cat <<EOF >./tmp.babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ['react-native-paper/babel'],
  };
};
EOF


cat ./tmp.babel.config.js | tee ./babel.config.js
