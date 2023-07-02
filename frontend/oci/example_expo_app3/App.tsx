import { StatusBar } from "expo-status-bar"
import React from "react";
import {
  StyleSheet,
  View,
  Text, 
  Pressable, 
} from "react-native";
import PestoUserBrowserView from "./pestoUserBrowserView";
import PestoEditor from "./pestoEditor"

export default function App() {
  const debug: boolean = true
  const [page, setPage] = React.useState<string>('browser')

  function handleClick(action: string) {
    console.log('app: click '+action)
    if (action == 'editor') setPage('editor')
    if (action == 'back') setPage('browser')
  }

  if ( page == "browser")
    return (
      <View style={styles.container}>
        {/* Scroll view to enable scrolling when list gets longer than the page */}
        <StatusBar style="auto" />
        <PestoUserBrowserView onClick={(action: string) => {handleClick(action)}}></PestoUserBrowserView>
      </View>
    );
  if ( page == "editor")
    return (
      <View style={styles.container}>
        {/* Scroll view to enable scrolling when list gets longer than the page */}
        <StatusBar style="auto" />
        <PestoEditor onClick={(cmd: string) => handleClick(cmd)}></PestoEditor>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});