import React from "react"
import { View, Text, StyleSheet, StyleProp, ViewStyle, NativeEventEmitter, Pressable, Image } from "react-native"

export interface PestoUser {
  name: string;
  picture: string;
  index?: number;
  onClick?: Function;
}

function User(props: PestoUser) { 
  const [task, setUser] = React.useState<PestoUser>(); 
  const  handleOnTaskClick = (action: string) => { 
    console.log('task: '+action)
    props?.onClick?.(action)
  }   

  return ( 
    <View style={styles.container}>
      <View style={styles.user}>
        <Image 
            style={{
                resizeMode: 'contain',
                height: 20,
                width: 20,
                marginRight: 5,
            }}
            source={{uri: props?.picture}}
        />
        <Text style={styles.text}>{props?.name || "default"}</Text>
      </View>
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
  user: {
    alignItems: "flex-end",
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: "row",
    flex: 0.9,
    marginHorizontal: 25,
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

export default User;