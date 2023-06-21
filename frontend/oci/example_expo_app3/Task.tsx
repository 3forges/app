import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle, NativeEventEmitter } from "react-native";

export interface PestoTask {
  text: string;
  priority?: number;
  isCompleted: boolean;
  index: number;
  onClick?: Function;
}

function Task(props: PestoTask) { 
  console.info(` - Appel de la fonction Task `)
  const [task, setTask] = React.useState<PestoTask>(); 

  const  handleOnTaskClick = (event: any) => { 
    console.info(` - Début - Appel de la fonction [handleOnTaskClick] index:`+props?.index)
    setTask({ text: task?.text || "?no text?", isCompleted: !(task?.isCompleted || false), index: props?.index || 0 });
    props?.onClick?.(event, task?.index)
    console.info(` - Fin - Appel de la fonction [handleOnTaskClick] `)
  } 
  return ( 
    <View style={!task?.isCompleted?styles.item:styles.itemCompleted} onTouchEnd={(event) => handleOnTaskClick(event)} >
      <View style={styles.itemLeft}>
        <Text style={styles.item} onPress={(event) => handleOnTaskClick(event)}>{props?.text || "default"}</Text>
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