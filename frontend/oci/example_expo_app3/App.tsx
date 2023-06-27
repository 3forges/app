
// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from "native-base";
import PestoApp from "./components/PestoApp";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <PestoApp name="pesto" />
    </NativeBaseProvider>
  );
}

export default App;
