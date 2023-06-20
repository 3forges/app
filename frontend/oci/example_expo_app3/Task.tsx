import React from "react";
//import { useRef } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";


export interface PestoTask {
  text: string;
  priority?: number;
  isCompleted: boolean;
}

function Task(props: PestoTask) { 
  const [task, setTask] = React.useState<PestoTask>(); 
  if (task) {
    
  }else{
    setTask(props)
  }
  console.info(` - Début - Appel de la fonction Task `)
    console.log(task)
    console.info(` - Fin - Appel de la fonction Task `)
  const  handleOnTaskClick = () => { 
    setTask({ text: task?.text || "please", isCompleted: !task?.isCompleted});
    console.info(` - Début - Appel de la fonction [handleOnTaskClick] `)
    console.log(task)
    console.info(` - Fin - Appel de la fonction [handleOnTaskClick] `)
  }
  return ( 
    <View style={!task?.isCompleted?styles.item:styles.itemCompleted} onTouchEnd={handleOnTaskClick} >
      <View style={styles.itemLeft}>
        <Text style={styles.item}>{task?.text || "default"}</Text>
      </View>
    </View>
  );
}
/*
function updTask(props: PestoTask) {

}
*/
const styles = StyleSheet.create({
  itemCompleted: {
    backgroundColor: "red",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    textDecorationLine: "line-through",
  },
  item: {
    backgroundColor: "#FFF",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    textDecorationLine: "none"
  },
  itemLeft: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "100%",
  },
});

export default Task;