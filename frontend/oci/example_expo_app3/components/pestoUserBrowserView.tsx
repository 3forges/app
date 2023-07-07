import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView, 
} from "react-native";
import User from "./User";
// REDUX
import { useDispatch, useSelector } from "react-redux"
import ModalForUserDeletion from "./ModalForDeletion"
import ModalForUserDetails from "./ModalForUserDetails"

interface modalFUDinfos {
  index: number,
  visible: boolean, 
}

export default function PestoBrowserView(props: any) {
    // REDUX
  const userRedux = useSelector((state: any) => state.userRedux.value) // Reading the state
  const dispatch = useDispatch();
  const [filterString, setFilterString] = React.useState<string>('')
    // un modalDELETEvisible state pour chaque user
  const [modalDELETEvisible, setModalDELETEvisible] = React.useState<boolean[]>([...userRedux.map(() => { return false })])
    // modal For User Details state
  const [modalFUDinfo, setModalFUDinfo] = React.useState<modalFUDinfos>({ index: -1, visible: false})
  
  /**
   *  Gestion des pressables locaux & composants fils immediat
   * 
   * @param index   reference pour userRedux (-1 ~= null)
   * @param action  enum (back|save|delete|closeModal|showModal|edit)
   */
  function handleClick(index: number, action: string) {
    //console.log(action, index)      
    if (action == "back" || action == "save")         // from ModalForUserDetails.tsx
      setModalFUDinfo({ index: -1, visible: false})
    
    if (action == "delete") {                       // from ModalForDeletion.tsx
      const visible = [...modalDELETEvisible]
      visible.splice(index,1)
      setModalDELETEvisible(visible)
    }
    
    if (action == "closeModal")               // from ModalForDeletion.tsx & ModalForUserDetails.tsx
      modalUpdate(index, false)
                                            // from User.tsx
    if (action == "showModal") modalUpdate(index, true)  
    if (action == "edit") setModalFUDinfo({ index: index, visible: true}) 
  }

  /**
   * toogle false|true modalDELETEvisible[index]
   * @param index 
   * @param bool 
   */
  function modalUpdate(index: number, bool: boolean) {
    const visible = [...modalDELETEvisible]
    visible[index] = bool;
    setModalDELETEvisible(visible)
  }

  // SOME DEBUG
  console.log("userRedux : ",userRedux)

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, }} keyboardShouldPersistTaps="handled">
        <View style={styles.userWrapper}>
          <Text style={styles.sectionTitle}>User List</Text>
          {/* FILTER INPUT */}
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
                    {/**
                     * ModalForUserDeletion props: 
                     *    index (pour infos user dans la modale)
                     *    visible => useState (rendu on/off)
                     */}
                    <ModalForUserDeletion 
                      index={index} 
                      visible={modalDELETEvisible[index]}
                      onClick={ (index: number, action: string) => { handleClick(index, action) }}></ModalForUserDeletion>                
                    {/**
                     * User props: PestoUser
                     */}
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

      
      <View style={styles.writeUserWrapper}>
      {/* Add an user Button */}
      <TouchableOpacity onPress={() => setModalFUDinfo({ index: -1, visible: true})}>
        <View style={styles.addUser}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      {/**
       * ModalForUserDetails Props:
       *    info: { index: number, visible: boolean} => useState 
       *        index: index > -1 pour une edition index = -1 pour un ajout
       *        visible: (rendu on/off)
       */}
      <ModalForUserDetails 
        style={styles.modalView} 
        info={modalFUDinfo} 
        onClick={ (action: string) => {handleClick(-1, action)}}>
      </ModalForUserDetails>
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
    position: "relative",
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
