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
import { addUsers, dumpUsers } from "../userSlice";
import { ModalForUserDeletion } from "./ModalForDeletion";

export default function PestoBrowserView(props: any) {
  const debug: boolean = true
  // REDUX
  const userRedux = useSelector((state: any) => state.userRedux.value) // Reading the state
  const dispatch = useDispatch();
  const [filterString, setFilterString] = React.useState<string>('')

  // USER DETAILS
  const [modalVisible, setModalVisible] = React.useState<boolean[]>([
    ...userRedux.map(() => { return false })
  ])
  console.log("modalVisible init: "+modalVisible)
  
  function handleAddUser(action: string, index: number) {
    props?.onClick?.(action, index)
  }

  function handleClick(index: number, action: string) {
    if (action == "delete") {
      const visible = [...modalVisible]
      visible.splice(index,1)
      setModalVisible(visible)
    }
    if (action == "closeModal") modalUpdate(index, false)
    if (action == "showModal") modalUpdate(index, true)  // from User.tsx
    props?.onClick?.(action, index)
  }

  
  function modalUpdate(index: number, bool: boolean) {
    console.log('move modalVisible['+index+'] to '+bool)
    const visible = [...modalVisible]
    visible[index] = bool;
    setModalVisible(visible)
  }

  // SOME DEBUG
  console.log("userRedux : ",userRedux)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, }} keyboardShouldPersistTaps="handled">
        
        <View style={styles.userWrapper}>
          <Text style={styles.sectionTitle}>User List</Text>
          {/* FILTER */}
          <TextInput inlineImageLeft='search_icon' 
            style={styles.input}
            placeholder="filter ..."
            value={ filterString }
            onChangeText={ (name) => {setFilterString(name)} } 
          />

          {/* Users list */}
          <View style={styles.items}>
            { userRedux.map((item: any, index: number) => { 
                if ((filterString != '' &&  item.name.toLocaleUpperCase().replace(filterString.toLocaleUpperCase(),'') != item.name.toLocaleUpperCase() ) || filterString == '')
                  return (
                    <TouchableOpacity key={index}>
                    <ModalForUserDeletion 
                      index={index} 
                      visible={modalVisible[index]}
                      onClick={ (index: number, action: string) => { handleClick(index, action) }}></ModalForUserDeletion>                
                    <User
                      name={item.name}
                      forname={item.forname}
                      age={item.age} 
                      picture={item.picture}
                      onClick={(action: string) => handleClick(index, action)} />
                    </TouchableOpacity>
                  );
                })
              }
          </View>
        </View>
      </ScrollView>

      {/* Add an user Button */}
      <View style={styles.writeUserWrapper}>
      <TouchableOpacity onPress={() => handleAddUser('addUser', userRedux.length)}>
        <View style={styles.addUser}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </View>
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
