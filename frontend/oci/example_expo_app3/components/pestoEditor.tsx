import React from "react";
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView, 
  Modal, 
  Button, 
  Pressable, 
} from "react-native";
import { PestoUser } from "./User";


export default function PestoEditor(props: any) {
  const [userItems, setUserItems] = React.useState<PestoUser[]>([])

  function handleClick() {
      props?.onClick?.('back')
    }

    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
        <Text style={styles.addText}> en cour ...</Text>
        <Pressable onPress={() => handleClick()}>
            <Text style={styles.addText}> back </Text>
        </Pressable>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  items: {
    marginTop: 30,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
  },
  addText: {},
});