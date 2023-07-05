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

export default function PestoBrowserView(props: any) {
  const debug: boolean = true
  // REDUX
  const userRedux = useSelector((state: any) => state.userRedux.value) // Reading the state
  const dispatch = useDispatch();

  const [userItems, setUserItems] = React.useState<PestoUser[]>([])
  const [modalVisible, setModalVisible] = React.useState<boolean[]>([false])
  const [inputUser, setInputUser] = React.useState<PestoUser>({
    name: 'add user',
    onClick: () => {}, 
    index: 0
  })
  const [filterString, setFilterString] = React.useState<string>('')

  function handleAddUser() {
    Keyboard.dismiss();
    let editedUser: PestoUser = { name: inputUser.name, index: userItems.length, onClick: () => {} }
    dispatch(setUsers(editedUser))
    console.log('new user: ', editedUser)
  }

  function handleClick(index: number, action: string) {
    if (action == "delete") deleteUser(index)
    if (action == "showModal") modalUpdate(index, true)
    props?.onClick?.(action)
  }

  function modalUpdate(index: number, bool: boolean) {
    const visible = [...modalVisible]
    visible[index] = bool;
    setModalVisible(visible)
  }

  function deleteUser(index: number) {
    let itemsCopy = userRedux
    itemsCopy.splice(index, 1);
    dispatch(setUsers(itemsCopy))
  }

  console.log("userRedux : ",userRedux)
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
          
          <TextInput inlineImageLeft='search_icon' 
            style={styles.input}
            placeholder="filter ..."
            value={ filterString }
            onChangeText={ (name) => {setFilterString(name)} } 
          />
          
          <View style={styles.items}>
            {/* This is where the users will go! */}
            { 
              userRedux.map((item: any, index: number) => { 
                if ((filterString != '' &&  item.name.toLocaleUpperCase().replace(filterString.toLocaleUpperCase(),'') != item.name.toLocaleUpperCase() ) || filterString == '')
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
             <TextInput
          style={styles.input}
          placeholder="add user ..."
          value={inputUser.name}
          onChangeText={ (newName) => {setInputUser({ name: newName, index: userRedux?.length || 0, onClick: () => {} })}}
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
