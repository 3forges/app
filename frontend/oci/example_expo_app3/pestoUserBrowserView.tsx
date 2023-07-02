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
  Image, 
} from "react-native";
import User, { PestoUser } from "./User";

export default function pestoBrowserView(props: any) {
  const debug: boolean = true
  const [inputUser, setUser] = React.useState<PestoUser>()
  const [userItems, setUserItems] = React.useState<PestoUser[]>([])
  const [modalVisible, setModalVisible] = React.useState<boolean[]>([false])
  const [data, setData] = React.useState([]);

  // Fecth randomuser api
  async function randomUserAsync() {   
    let url = 'https://randomuser.me/api/'
    let arg = '?results=1'
    let response = await fetch(url+arg)
    setData(await response.json())
  }

  function handleAddUser() {
    Keyboard.dismiss();
    // Handle no update on inputUser
    let userName: string = ((inputUser)?inputUser.name:data.results[0].name.first)
    let picture: string = ((inputUser)?inputUser.picture:data.results[0].picture.thumbnail)

    let editedTask: PestoUser = { name: userName, picture: picture, index: userItems.length, onClick: () => {} }
    setUserItems(userItems => [...userItems, editedTask])
    console.log('new user: ', editedTask)
    modalUpdate(userItems.length, false)
    setData([])
  }

  function handleClick(index: number, action: string) {
    console.log('click action: '+action+' index: '+index)
    if (action == "delete") deleteUser(index)
    if (action == "deleteModal") modalUpdate(index, true)
    props?.onClick?.(action)
  }

  function modalUpdate(index: number, bool: boolean) {
    const visible = [...modalVisible]
    visible[index] = bool;
    setModalVisible(visible)
  }

  function updateUser(index: any, retask: PestoUser) {

  }

  function deleteUser(index: any) {
    let itemsCopy = [...userItems];
    itemsCopy.splice(index, 1);
    setUserItems(itemsCopy);
  }

  // Affreuse bidouille en attendant le redux | usememo() | brain upgrade
  // => ce qui fait que l'appli se redessine d'bord vide (blink effect)
  if (data.length == 0) {
    randomUserAsync()
  }
  
  if (data.length != 0) {return (
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
            {/* This is where the tasks will go! */}
            {userItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible[index]}
                    onRequestClose={() => {
                        modalUpdate(index, false);
                    }}>
                    <View style={styles.modalView}>
                        <Text>Voulez vous supprimer l'utilisateur #{index}. {userItems[index].name} ?</Text>
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
            source={{uri: data?.results[0]?.picture.thumbnail || ''}}
        />
        <TextInput
          style={styles.input}
          placeholder="add user ..."
          value={data?.results[0]?.name.first || ''}
          onChangeText={ (newName, newPicture=data?.results[0]?.picture.thumbnail) => {setUser({ name: newName, picture: newPicture, index: userItems?.length || 0, onClick: () => {} })}}
        />
        <TouchableOpacity onPress={() => handleAddUser()}>
          <View style={styles.addUser}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}}

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
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 150,
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