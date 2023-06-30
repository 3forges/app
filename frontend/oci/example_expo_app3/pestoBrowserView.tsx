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
import Task, { PestoTask } from "./Task";

export default function pestoBrowserView(props: any) {
  const debug: boolean = true
  const [inputTask, setTask] = React.useState<PestoTask>()
  const [taskItems, setTaskItems] = React.useState<PestoTask[]>([])
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)

  const defaultPestoTask: PestoTask = { text: "faire le ménage", index: 0, onClick: () => {} }

  function handleAddTask() {
    Keyboard.dismiss();
    let editedTask: PestoTask = { text: `${inputTask?.text || defaultPestoTask.text}`, index: taskItems.length, onClick: () => {} }
    setTaskItems(taskItems => [...taskItems, editedTask])
  }

  function handleClick(index: number, action: string) {
    console.log('click action: '+action+' index: '+index)
    //if (action == "delete") deleteTask(index)
    if (action == "deleteModal") setModalVisible(true)
    props?.onClick?.(action)
  }

  function updateTask(index: any, retask: PestoTask) {

  }

  function deleteTask(index: any) {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My ToDo List</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.modalView}>
                        <Text>Voulez vous supprimer #{index} ?</Text>
                        <Pressable onPress={() => {
                            handleClick(index, 'delete')
                            setModalVisible(!modalVisible)
                        }}>
                        <Text>oui</Text>
                        </Pressable>
                        <Pressable onPress={() => setModalVisible(!modalVisible)}>
                            <Text>non</Text>
                        </Pressable>
                    </View>
                </Modal>
                <Task
                  text={item.text}
                  index={index}
                  onClick={(action: string) => handleClick(index, action)} 
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add new item"}
          value={inputTask?.text}
          onChangeText={(newText) => setTask({ text: newText, index: taskItems?.length || 0, onClick: () => {} })}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
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
        alignItems: 'center',
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
  tasksWrapper: {
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});