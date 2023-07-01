import { StatusBar } from "expo-status-bar"
import React from "react";
import {
  StyleSheet,
  View,
  Text, 
  Pressable, 
} from "react-native";
import PestoBrowserView from "./pestoBrowserView";
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
        <PestoBrowserView onClick={(action: string) => {handleClick(action)}}></PestoBrowserView>
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
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});