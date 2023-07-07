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
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../userSlice";

export default function PestoEditor(props: any) {
  // const [userItems, setUserItems] = React.useState<PestoUser[]>([])
  const userRedux = useSelector((state: any) => state.userRedux.value) // Reading the state
  const dispatch = useDispatch();

  const [inputsUser, setInputsUser] = React.useState<PestoUser>({
    name: '',
    forname: '',
    picture: '',
    age: 0,
  })

  function handleClick(action: string, index: number) {
    if (action=="save") dispatch(addUsers(inputsUser))
    props?.onClick?.(action, index)
  }

    return (
      <View>
        <View>
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeUserWrapper} >
            <View style={styles.container}>
              <View style={styles.user}>
                <TextInput
                    key="name"
                    style={styles.input}
                    placeholder="Nom ..."
                    value={inputsUser.name}
                    onChangeText={ (newName) => {setInputsUser({ name: newName, forname: inputsUser.forname, age: inputsUser.age, picture: inputsUser.picture })}}
                />
                <TextInput
                    key="forname"
                    style={styles.input}
                    placeholder="Prenom ..."
                    value={inputsUser.forname}
                    onChangeText={ (newForName) => {setInputsUser({ name: inputsUser.name, forname: newForName, age: inputsUser.age, picture: inputsUser.picture })}}
                />
                <TextInput
                    key="age"
                    style={styles.input}
                    placeholder="age ..."
                    value={((inputsUser.age!= 0)?''+inputsUser.age:'')}
                    onChangeText={ (newAge: any) => {setInputsUser({ name: inputsUser.name, forname: inputsUser.forname, age: newAge, picture: inputsUser.picture })}}
                />
                <Button
                  onPress={() => handleClick('save', userRedux.length)}
                  title="Save"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.back}>
          <Pressable onPress={() => handleClick('back', 0)}>
              <Text style={styles.addText}> back </Text>
          </Pressable>
        </View>
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
  user: {
    alignItems: "flex-end",
    justifyContent: 'flex-start',
    flexDirection: "row",
    flex: 0.6,
    marginHorizontal: 25,
    paddingTop: 80,
    paddingHorizontal: 120,
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
    width: "100%",
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginHorizontal: 15,
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
  back: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  }
});