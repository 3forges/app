import React from "react";
import { useRef } from "react";
import { // BRef cet écran fonctionne sur mobile mais pas web, c'est là qu'on a réussit à gérer les états avec la UI
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
  const [inputTask, setTask] = React.useState<PestoTask>();
  // isCompleteState to array, au feeling
  const [isCompletedStates, setisCompletedStates] = React.useState<boolean[]>([false]);
  const [taskItems, setTaskItems] = React.useState<PestoTask[]>([]);
  const defaultPestoTask: PestoTask = {text: "faire le ménage", isCompleted: false}

  function handleAddTask() {
    Keyboard.dismiss();
    let editedTask: PestoTask = {text: `${inputTask?.text || defaultPestoTask.text}`, isCompleted: false}
    setTaskItems(taskItems => [...taskItems, editedTask])
    //setTask(editedTask);
  }

  function completeTask(index: any) {
    // taskItems[index].isCompleted = ! taskItems[index].isCompleted 
    setTaskItems(taskItems => {
      taskItems[index].isCompleted = ! taskItems[index].isCompleted 
      const tmp = [...isCompletedStates]
      tmp[index] = taskItems[index].isCompleted
      console.log("test")
      return taskItems
    })
    // setisCompletedStates(isCompletedStates => synchroState(index))
  }

  function synchroState(index: any) {
    const tmp = [...isCompletedStates]
    tmp[index] = taskItems[index].isCompleted
    /*
    if (tmp.filter(function (bool) {return bool!=true}).length == 0) { 
      setTaskItems(taskItems => [])
      setisCompletedStates(isCompletedStates => [])
    }
    */
    return(tmp)
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
          <View nativeID="VINCENT" id="bobobobo" style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index} >
                  <Task 
                    text={item.text} 
                    isCompleted={isCompletedStates[index]} 
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