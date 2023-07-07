import { StatusBar } from "expo-status-bar"
import React from "react";
import {
  StyleSheet,
  View,
  Text, 
  Pressable, 
} from "react-native";
import PestoUserBrowserView from "./components/pestoUserBrowserView";
import PestoEditor from "./components/pestoEditor"
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const debug: boolean = true
  const [page, setPage] = React.useState<string>('browser')
  let userIndex: any = null
  function handleClick(action: string, index: number) {
    //console.log(action, index)
    
    if (action == 'editor' || action == 'addUser') {
      setPage('editor')
      userIndex = index
    }
    if (action == 'back' || action =='save') setPage('browser')
    
  }

  if ( page == "browser")
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <PestoUserBrowserView onClick={(action: string, index: number) => {handleClick(action, index)}}></PestoUserBrowserView>
        </View>
      </Provider>
    );
  if ( page == "editor")
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <PestoEditor onClick={(cmd: string, index: number) => handleClick(cmd, index)} userIndex={userIndex}></PestoEditor>
        </View>
      </Provider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});