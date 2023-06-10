# Docker image Pesto frontend

## Scaffold a react-native expo app 


```bash

# --- OPTION 1
pnpm dlx create-expo-app -t expo-template-blank-typescript .
pnpm dlx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
pnpm i && pnpm web
# --- 

# --- OPTION 2

# ---
# First execution will fail on windows, because
# of a file path issue, we on't care much about
pnpm dlx create-expo-app --template @rocali/expo-ts-rest-template . || true

export SLASHED_USERPROFILE=$(echo $USERPROFILE | sed "s#\\\#/#g" | sed "s#C:#/c#g")

export NPX_TMPLT_CACHE_DIR="${SLASHED_USERPROFILE}/AppData/Local/Temp/.create-expo-app/template-cache"

mdkir -p ${NPX_TMPLT_CACHE_DIR}/@rocali/
export EXPO_TMPLT_VERSION="1.0.6"
cp ${NPX_TMPLT_CACHE_DIR}/rocali-expo-ts-rest-template-${EXPO_TMPLT_VERSION}.tgz ${NPX_TMPLT_CACHE_DIR}/@rocali/expo-ts-rest-template-${EXPO_TMPLT_VERSION}.tgz

pnpm dlx create-expo-app --template @rocali/expo-ts-rest-template . || true

pnpm add -D react@"^16.8.0 || ^17.0.0"
pnpm dlx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1









pnpm remove -D react@"^16.8.0 || ^17.0.0"
pnpm remove react@"^16.8.0 || ^17.0.0"
pnpm dlx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
pnpm dlx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1 @babel/core babel-preset-react-native
pnpm dlx expo install react@18.2.0 react-native-web@~0.18.10 react-dom@"^16.8.0" @expo/webpack-config@^18.0.1 @babel/core babel-preset-react-native


pnpm uninstall babel-preset-react-native
pnpm uninstall -D babel-preset-react-native
pnpm dlx expo install metro-react-native-babel-preset

pnpm dlx expo install react@^17.0.0 react-dom@"^17.0.0" @storybook/addon-knobs@5.3.21

# ---
# react-native@0.71.3 - expected version: 0.71.8
pnpm dlx expo install react-native@0.71.8 @babel/runtime fbjs scheduler@0.23.0 normalize-css-color@1.0.2

pnpm dlx expo install @storybook/addons @emotion/native react-native-swipe-gestures @storybook/core-events emotion-theming @storybook/channels @storybook/channel-websocket @storybook/client-api core-js

# ---
# + @emotion/native 11.11.0
# + @storybook/addons 7.0.20
# + @storybook/channel-websocket 7.0.20
# + @storybook/channels 7.0.20
# + @storybook/client-api 7.0.20
# + @storybook/core-events 7.0.20
# + core-js 3.30.2
# + dlx 0.2.1
# + emotion-theming 11.0.0
# + inline-style-prefixer 7.0.0
# + install 0.13.0
# + pnpm 8.6.1
# + react-native-swipe-gestures 1.0.5
# 
# ---

pnpm add inline-style-prefixer core-js @types/inline-style-prefixer
pnpm add -D @types/inline-style-prefixer

# ---
pnpm i && pnpm web
# ---

# --- OPTION 3
pnpm dlx create-expo-app -t @richardhofmaenner/template-expo-supabase .
pnpm dlx create-expo-app -t expo-booster .


```

## ANNEX: References

* Dockerize a react-native expo app: https://medium.com/@ganiilhamirsyadi/dockerize-react-native-expo-app-152c1e65e76c
* react-native components: https://reactnativeelements.com/docs/installation