import { StatusBar } from "expo-status-bar"
import React from "react";
import {
  StyleSheet,
  View,
  Text, 
  Pressable, 
} from "react-native";
import PestoUserBrowserView from "./components/pestoUserBrowserView";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <PestoUserBrowserView></PestoUserBrowserView>
        </View>
      </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});