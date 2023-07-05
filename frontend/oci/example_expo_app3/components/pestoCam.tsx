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
  Pressable,
  Image, 
} from "react-native";
import User, { PestoUser } from "./User";
// REDUX
// import { useDispatch, useSelector } from "react-redux";
// import { setUsers, dumpUser } from "../userSlice";
import { useCameraDevices } from "react-native-vision-camera"



export default function PestoCam() {
	//const devices = Camera.getAvailableCameraDevices()
	const devices = useCameraDevices()
	//const device = devices.back
	//console.log(devices)

	return(
		<View style={styles.container}>
			{/* Scroll view to enable scrolling when list gets longer than the page */}
			<ScrollView contentContainerStyle={{ flexGrow: 1, }} keyboardShouldPersistTaps="handled">
			<View>
					<Text>Camera</Text>
			</View>
			</ScrollView>
		</View>
	)
}


const styles = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: "flex-end",
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    container: {
      flex: 1,
      backgroundColor: "#E5E5E5",
    },
    userWrapper: {
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
    writeUserWrapper: {
      position: "absolute",
      bottom: 60,
      width: "100%",
      marginLeft: 10,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    input: {
      paddingVertical: 7,
      paddingHorizontal: 15,
      backgroundColor: "#FFF",
      width: 200,
    },
    addUser: {
      width: 60,
      height: 60,
      marginHorizontal: 20,
      backgroundColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
    },
    addText: {},
  });