import React from "react";
import {
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal, 
  Button, 
  Pressable, 
} from "react-native";
import { PestoUser } from "./User";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, dumpUsers } from "../userSlice";

export default function ModalForUserDetails(props: any) {
  const userRedux = useSelector((state: any) => state.userRedux.value) // Reading the state
  const dispatch = useDispatch();
  
  const [editable, setEditable] = React.useState<Boolean>(false)
  console.log(editable)
  /* Travaux */
  console.log("index: "+props.info.index)
  let defaultUser = { name: '', forname: '', picture: '', age: 0 }
  if (props.info.index != -1) defaultUser = userRedux[props.info.index]

  console.log("defaultUser: ", defaultUser)
  const [inputsUser, setInputsUser] = React.useState<PestoUser>({...defaultUser})
  console.log("inputsUser: ", inputsUser)
  /* Travaux */

  /**
   * Gestion de click locaux & remonté parent (pestoUserBrowserView.tsx)
   *  sauvegarde redux (add|dump) + some reset
   * @param action 
   */
  function handleClick(action: string) {
    if (action=="save" && props.info.index == -1) dispatch(addUsers(inputsUser))
    if (action=="save" && props.info.index != -1) {
      const copy = [...userRedux]
      copy[props.info.index] = inputsUser
      dispatch(dumpUsers(copy))
    }
    setInputsUser({ name: '', forname: '', picture: '', age: 0 })
    setEditable(false)
    // to parent
    props?.onClick?.(action)
  }

  if (editable == false && props.info.index != -1) 
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={ props.info.visible }
        onRequestClose={() => {
          handleClick('closeModal');
        }}
        style={styles.writeUserWrapper}>
        <View style={styles.modalView}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={styles.user}>
            <Text>name: {userRedux[props.info.index].name}</Text>
            <Text>forname: {userRedux[props.info.index].forname}</Text>
            <Text>age: {userRedux[props.info.index].age}</Text>
            <Button
              onPress={() => setEditable(true)}
              title="Edit"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.back}>
          <Pressable onPress={() => handleClick('back')}>
              <Text style={styles.addText}> back </Text>
          </Pressable>
        </View>
        </View>
      </Modal>
    )
  else
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={ props.info.visible }
        onRequestClose={() => {
          handleClick('closeModal');
        }}
        style={styles.writeUserWrapper}>
        <View style={styles.modalView}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={styles.user}>
            <TextInput
              key="name"
              style={styles.input}
              placeholder="Nom ..."
              value={inputsUser.name || defaultUser.name}
              onChangeText={ (newName) => {setInputsUser({ name: newName, forname: inputsUser.forname, age: inputsUser.age, picture: inputsUser.picture })}}
            />
            <TextInput
              key="forname"
              style={styles.input}
              placeholder="Prenom ..."
              value={inputsUser.forname || defaultUser.forname}
              onChangeText={ (newForName) => {setInputsUser({ name: inputsUser.name, forname: newForName, age: inputsUser.age, picture: inputsUser.picture })}}
            />
            <TextInput
              key="age"
              style={styles.input}
              placeholder="age ..."
              value={((inputsUser.age!= 0)?''+inputsUser.age:((defaultUser.age!=0)?''+defaultUser.age:''))}
              onChangeText={ (newAge: any) => {setInputsUser({ name: inputsUser.name, forname: inputsUser.forname, age: newAge, picture: inputsUser.picture })}}
            />
            <Button
              onPress={() => handleClick('save')}
              title="Save"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </KeyboardAvoidingView>

        <View style={styles.back}>
          <Pressable onPress={() => handleClick('back')}>
              <Text style={styles.addText}> back </Text>
          </Pressable>
        </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  writeUserWrapper: {
    position: "absolute", 
    top: 100,
    left: 30,
    width: "50%",    
    marginLeft: 10,
    flexDirection: "column", 
  },
  modalView: {
    margin: "15%", 
    width: "66%",
    height: 300, 
    backgroundColor: '#fff',
    borderColor: '#535353',
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20, 
  },
  user: {
    alignItems: "center",
    justifyContent: 'flex-start',
    flexDirection: "column",
    marginHorizontal: 25,
    paddingTop: 10,
    paddingHorizontal: 120,
  },
  input: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    width: 200,
  },
  text: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    backgroundColor: "#FFF",
    width: 200,
  },
  addText: {},
  back: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  }
});