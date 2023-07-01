import * as React from 'react';
import { AppRegistry } from 'react-native';
import  {mainPestoTheme} from './pesto.paper.theme'
import appMeta from './app.json';
import App from './src/screens/PestoApp';
import {  PaperProvider } from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider theme={mainPestoTheme}>
      <App  text='pesto' />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appMeta.expo.name, () => Main);