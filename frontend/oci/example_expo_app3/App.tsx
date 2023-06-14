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
} from "react-native";
import Task, { PestoTask } from "./Task";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [task, setTask] = React.useState<PestoTask>();
  const [isCompletedState, setIsCompletedState] = React.useState<boolean>(false);
  //const [taskItems, setTaskItems] = React.useState([]);
  // const [taskItems, setTaskItems] = React.useState(0);
  const [taskItems, setTaskItems] = React.useState<PestoTask[]>([]);
  const defaultPestoTask: PestoTask = {text: "faire le ménage", isCompleted: false}
  // setTaskItems([defaultPestoTask]);

  function handleAddTask() {
    Keyboard.dismiss();
    // taskItems.push(firstTask);
    // setTaskItems([...taskItems, task])
    
    let editedTask: PestoTask = {text: `${task?.text || defaultPestoTask.text}`, isCompleted: false}
    setTaskItems(taskItems => [...taskItems, editedTask])
    setTask(editedTask);
  }

  function completeTask(index: any) {
    taskItems[index].isCompleted = ! taskItems[index].isCompleted 
    setIsCompletedState(taskItems[index].isCompleted)
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
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>My ToDo List Biobob sans internet oh ouiiiiiid</Text>
          <View nativeID="VINCENT" id="bobobobo" style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={/*taskItems[index].isCompleted*/isCompletedState?styles.tasksWrapper:styles.tasksWrapperDone}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item.text} isCompleted={false} />
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
          value={task?.text}
          onChangeText={(newText) => setTask({ text: newText, isCompleted: false})}
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
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  tasksWrapperDone: {
    textDecorationLine:"line-through",
    color:"0dfebf",
    borderColor:  "ff34ad",
    paddingTop: 40,
    backgroundColor: 'red',
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