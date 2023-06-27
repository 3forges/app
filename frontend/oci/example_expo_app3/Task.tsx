import React from "react"
import { View, Text, StyleSheet, StyleProp, ViewStyle, NativeEventEmitter, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';


export interface PestoTask {
  text: string;
  priority?: number;
  isCompleted: boolean;
  index: number;
  onClick?: Function;
}

function Task(props: PestoTask) { 
  const debug: boolean = true
  debug && console.info(` - Début - Appel de la fonction [Task] `)
  const [task, setTask] = React.useState<PestoTask>(); 

  const  handleOnTaskClick = () => { 
    debug && console.info(` - Début - Appel de la fonction [handleOnTaskClick] index:`+props?.index)
    setTask({ 
      text: task?.text || "?no text?", 
      isCompleted: !(task?.isCompleted), 
      index: task?.index || 0 })
    props?.onClick?.()
    debug && console.info(` - Fin - Appel de la fonction [handleOnTaskClick] `)
  } 
  const myButton = (
    <Icon.Button
      name="delete"
      backgroundColor="#3b5998"
      onPress={handleOnTaskClick}
    >
      Del
    </Icon.Button>
  );
  
  const customTextButton = (
    <Icon.Button name="facebook" backgroundColor="#3b5998">
      <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
        Login with Facebook
      </Text>
    </Icon.Button>
  );
  return ( 
    <View style={!task?.isCompleted?styles.item:styles.itemCompleted}>
      <Pressable style={styles.itemLeft} onPress={() => handleOnTaskClick()} >
        <Text style={styles.item}>{props?.text || "default"}</Text>
        {myButton}
      </Pressable>
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
});

export default Task;