import React from "react"
import { View, Text, StyleSheet, StyleProp, ViewStyle, NativeEventEmitter, Pressable, Image } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

import { Button } from 'react-native-paper'
import { Colors } from "react-native/Libraries/NewAppScreen";

// import { SafeAreaView} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';




import { useTheme } from 'react-native-paper';
const pestoPaperTheme = useTheme();
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export interface PestoTasksListProps {
  text: string;
  priority?: number;
  index?: number;
  onClick?: Function;
}



const PestoTasksList = (props: PestoTasksListProps ) => {
  const [currentView, setCurrentView] = React.useState<PestoTasksListProps>(); 

  const  handleOnNavigateClick = (action: string) => { 
    console.log('currentView: '+action)
    props?.onClick?.(action)
  }   
  return ( 
    <SafeAreaView style={styles.container}>

    <View style={styles.container}>
      <Text style={styles.text}>{props?.text || "default"}</Text>
        <Pressable onPress={() => handleOnNavigateClick('editor')} >
          <Button icon="book-edit-outline" theme={pestoPaperTheme} textColor={pestoPaperTheme.colors.primary} buttonColor={pestoPaperTheme.colors.secondary} mode="outlined" onPress={() => handleOnNavigateClick('editor')}>
            A Paper Button ?
          </Button>
        </Pressable>
      <View >
        <Button icon="camera-outline" theme={{ colors: { primary: 'green' } } } mode="outlined"  >
          Antoher button
        </Button>
        <Pressable onPress={() => handleOnNavigateClick('editor')} >
          
          <Icon name="edit"></Icon>

        </Pressable>
        <Pressable onPress={() => handleOnNavigateClick('deleteModal')} >
          
          <Icon name="edit"></Icon>
        </Pressable>
      </View>
     </View>
     </SafeAreaView>
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


export default PestoTasksList;