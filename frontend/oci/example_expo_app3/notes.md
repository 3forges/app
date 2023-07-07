**Warnings**

### yarn warning list following a git clone git@github.com:3forges/app.git && yarn

[1/4] Resolving packages...
* warning expo > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
* warning expo > expo-constants > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
* warning expo > expo-asset > expo-constants > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
* warning expo > expo-file-system > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
* warning expo > expo-asset > expo-file-system > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
* warning expo > @expo/cli > cacache > @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
* warning react-native > react-native-codegen > jscodeshift > micromatch > snapdragon > source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
* warning react-native > react-native-codegen > jscodeshift > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
* warning react-native > react-native-codegen > jscodeshift > micromatch > snapdragon > source-map-resolve > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
* warning react-native > react-native-codegen > jscodeshift > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
* warning react-native > @react-native-community/cli > @react-native-community/cli-plugin-metro > metro > metro-minify-uglify > uglify-es@3.3.9: support for ECMAScript is superseded by `uglify-js` as of v3.13.0
* warning @expo/webpack-config > webpack-dev-server > webpack-dev-middleware > memfs@3.6.0: this will be v4
* warning @expo/webpack-config > css-minimizer-webpack-plugin > cssnano > cssnano-preset-default > postcss-svgo > svgo > stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
* warning @types/expo@33.0.1: This is a stub types definition. expo provides its own type definitions, so you do not need this installed.
* warning @types/expo > expo > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
* warning @types/expo > expo > expo-constants > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
* warning @types/expo > expo > expo-file-system > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
[2/4] Fetching packages...
[3/4] Linking dependencies...
* warning "expo-splash-screen > @expo/prebuild-config@6.0.1" has unmet peer dependency "expo-modules-autolinking@>=0.8.1".
* warning "react-native > react-native-codegen > jscodeshift@0.13.1" has unmet peer dependency "@babel/preset-env@^7.1.6".
* warning " > ts-node@10.9.1" has unmet peer dependency "@types/node@*".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 370.14s.

### how to reproduce :
```
git clone git@github.com:3forges/app.git 
cd app/frontend/oci/example_expo_app3
yarn
``` 