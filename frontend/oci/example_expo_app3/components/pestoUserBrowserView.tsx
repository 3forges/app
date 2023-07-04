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
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../userSlice";
import { createSlice } from "@reduxjs/toolkit";

export default function PestoBrowserView(props: any) {
  const debug: boolean = true
  // REDUX
  // const userItems = useSelector((state: any) => state.users.value); //reading the state 
  // const inputUser = useSelector((state: any) => state.users.value)
  // const modalVisible = useSelector((state: boolean) => state.modal.value)
  const userRedux = useSelector((state: any) => state.userRedux.value) // Reading the state
  const dispatch = useDispatch();

  const [userItems, setUserItems] = React.useState<PestoUser[]>([])
  const [modalVisible, setModalVisible] = React.useState<boolean[]>([false])
  
  const [inputUser, setUser] = React.useState<PestoUser>({
    name: 'add user',
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg', 
    onClick: () => {}, 
    index: 0
  })

  const [fetching, setFetching] = React.useState<boolean>(false)
  
  
  // Fecth randomuser api
  function randomUserAsync(arg: number) {   
    let url = 'https://randomuser.me/api/?results=1'
    fetch(url).then(
      fetchData => fetchData.json().then(
        fetchData => fetchData.results.map((result: any, index: number) => {
          setUser({
            name: result.name.title+' '+result.name.first+' '+result.name.last,
            picture: result.picture.thumbnail,
            onClick: () => {},
            index: index
          })
      }))
    )   
  }
  

  function handleAddUser() {
    Keyboard.dismiss();
    let editedUser: PestoUser = { name: inputUser.name, picture: inputUser.picture, index: userItems.length, onClick: () => {} }
    dispatch(setUsers(editedUser))
    console.log('new user: ', editedUser)
    randomUserAsync(1)
  }

  function handleClick(index: number, action: string) {
    if (action == "delete") deleteUser(index)
    if (action == "deleteModal") modalUpdate(index, true)
    props?.onClick?.(action)
  }

  function modalUpdate(index: number, bool: boolean) {
    const visible = [...modalVisible]
    visible[index] = bool;
    setModalVisible(visible)
  }

  function updateUser(index: any, reuser: PestoUser) {

  }

  function deleteUser(index: number) {
    let itemsCopy = userRedux
    itemsCopy.splice(index, 1);
    dispatch(setUsers(itemsCopy))
  }

  if (inputUser.name == 'add user' && fetching == false) { 
    console.log(fetching)
    setFetching(true)
    randomUserAsync(1)
  }
  console.log(userRedux)
  return (
    <View style={styles.container}>
      {/* Scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Users list */}
        <View style={styles.userWrapper}>
          <Text style={styles.sectionTitle}>User List</Text>
          <View style={styles.items}>
            {/* This is where the users will go! */}
            {
            //userItems.map((item: any, index: number) => {
              userRedux.map((item: any, index: number) => {
              return (
                <TouchableOpacity
                  key={index}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible[index] || false}
                    onRequestClose={() => {
                        modalUpdate(index, false);
                    }}>
                    <View style={styles.modalView}>
                        <Text>Voulez vous supprimer l'utilisateur #{index}. {userRedux[index].name} ?</Text>
                        <Pressable onPress={() => {
                            handleClick(index, 'delete')
                            modalUpdate(index, false)
                        }}>
                        <Text>oui</Text>
                        </Pressable>
                        <Pressable onPress={() => modalUpdate(index, false)}>
                            <Text>non</Text>
                        </Pressable>
                    </View>
                </Modal>
                <User
                  name={item.name}
                  index={index}
                  picture={item.picture}
                  onClick={(action: string) => handleClick(index, action)} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Add an user */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeUserWrapper} >
          <Image 
            style={{
                resizeMode: 'contain',
                height: 40,
                width: 40,
                marginRight: 5,
            }}
            source={{uri: inputUser.picture }}
        />
        <TextInput
          style={styles.input}
          placeholder="add user ..."
          value={inputUser.name}
          onChangeText={ (newName, newPicture=inputUser.picture) => {setUser({ name: newName, picture: newPicture, index: userRedux?.length || 0, onClick: () => {} })}}
        />
        <TouchableOpacity onPress={() => handleAddUser()}>
          <View style={styles.addUser}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
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
