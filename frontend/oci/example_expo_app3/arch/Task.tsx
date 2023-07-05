import React from "react"
import { View, Text, StyleSheet, StyleProp, ViewStyle, NativeEventEmitter, Pressable, Image } from "react-native"

export interface PestoTask {
  text: string;
  priority?: number;
  index?: number;
  onClick?: Function;
}

function Task(props: PestoTask) { 
  const debug: boolean = true
  debug && console.info(` - Début - Appel de la fonction [Task] `)
  const [task, setTask] = React.useState<PestoTask>(); 

  const  handleOnTaskClick = (action: string) => { 
    console.log('task: '+action)
    props?.onClick?.(action)
  }   

  return ( 
    <View style={styles.container}>
      <Text style={styles.text}>{props?.text || "default"}</Text>
      <View style={styles.buttons}>
        <Pressable onPress={() => handleOnTaskClick('editor')} >
          <Image
              style={{
                  resizeMode: 'contain',
                  height: 20,
                  width: 20,
                  marginRight: 5,
              }}
              source={require('./assets/edit.png')}
          />
        </Pressable>
        <Pressable onPress={() => handleOnTaskClick('deleteModal')} >
          <Image
              style={{
                  resizeMode: 'contain',
                  height: 20,
                  width: 20,
                  marginRight: 5,
              }}
              source={require('./assets/delete.png')}
          />
        </Pressable>
      </View>
     </View>
  );
}

function updTask(props: PestoTask) {

}

function delTask(props: PestoTask) {
  
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",

    width: "90%",
    flex: 1,
    margin: 5,
    color: '#535353', 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    borderWidth: 2,
    borderColor: "#000", 
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }, 
  text: {
    backgroundColor: "#FFF",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    textDecorationLine: "none",
    flex: 0.9,
  },
  buttons: {
      alignItems: "flex-end",
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      flexDirection: "row",
      flex: 0.1,
      marginHorizontal: 25,
  }
});

export default Task;