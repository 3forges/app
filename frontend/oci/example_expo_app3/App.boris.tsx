import { StatusBar } from "expo-status-bar"
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

export default function App() {
  const debug: boolean = true
  const [inputTask, setTask] = React.useState<PestoTask>()
  const [taskItems, setTaskItems] = React.useState<PestoTask[]>([])
  const defaultPestoTask: PestoTask = { text: "faire le ménage", isCompleted: false, index: 0, onClick: () => {} }

  function handleAddTask() {
    Keyboard.dismiss();
    let editedTask: PestoTask = { text: `${inputTask?.text || defaultPestoTask.text}`, isCompleted: false, index: taskItems.length, onClick: () => {} }
    setTaskItems(taskItems => [...taskItems, editedTask])
  }

  function cleanUpTaskItem(index: number) {
    debug && console.info(' Debut de la fonction [cleanUpTaskItem] ')
    setTaskItems(taskItems => {
      taskItems[index].isCompleted = !taskItems[index].isCompleted
      return taskItems
    })
    // CLEAN-UP si filter(false) => 0
    debug && console.info("taskItems undone-filtered length: ", taskItems.filter(function (bool) { return bool.isCompleted != true }).length)
    if (taskItems.filter((bool) => { return bool.isCompleted != true }).length == 0 && taskItems.length > 0) {
      setTimeout(() => setTaskItems(taskItems => []), 1000)
    }
    debug && console.info(' Fin de la fonction [cleanUpTaskItem] ')
  }

  function deleteTask(index: any) {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Scroll view to enable scrolling when list gets longer than the page */}
      <StatusBar style="auto" />
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
                <Task
                  text={item.text}
                  isCompleted={taskItems[index].isCompleted}
                  index={index}
                  onClick={() => cleanUpTaskItem(index)} />
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
          onChangeText={(newText) => setTask({ text: newText, isCompleted: false, index: taskItems?.length || 0, onClick: () => {} })}
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