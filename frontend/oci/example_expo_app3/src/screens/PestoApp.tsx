import React from "react"
import { View, Text, StyleSheet, StyleProp, ViewStyle, NativeEventEmitter, Pressable, Image } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'react-native-paper';
// import { Button } from 'react-native-paper'
// import { Colors } from "react-native/Libraries/NewAppScreen";

// // import { SafeAreaView} from 'react-native';
// import { SafeAreaView} from 'react-native-safe-area-context';

// import PestoNavigationPOC from '../components/drawer/PestoNavigationPOC'
import PestoNavigationPOC from '../components/drawer/PestoNavigationPOC'
import PestoDrawer from '../components/drawer/PestoDrawer'

import PestoFlatList from "../components/PestoFlatList";

/*
export default function PaymentScreen() {
  const theme = useTheme();

  return <View style={{ backgroundColor: theme.colors.primary }} />;
}
*/
export interface PestoAppProps {
  text: string;
  priority?: number;
  index?: number;
  onClick?: Function;
}

function PestoApp(props: PestoAppProps) { 
  const pestoTheme = useTheme();
  const debug: boolean = true
  debug && console.info(` - Début - Appel de la fonction [PestoApp] `)
  const [currentView, setCurrentView] = React.useState<PestoAppProps>(); 

  const  handleOnNavigateClick = (action: string) => { 
    console.log('currentView: '+action)
    props?.onClick?.(action)
  }   

  return ( 
    
    <PestoDrawer></PestoDrawer>
  );
}

const PestoNavigationPOCComponent = (pros: any) => {
  const pestoTheme = useTheme();
  return (
    <>
    <PestoNavigationPOC theme={pestoTheme}/>
    </>
  )
}

const FlatListScreen = (props: any) => {
  const pestoTheme = useTheme();
  return ( 
    <PestoFlatList theme={pestoTheme}/>
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

export default PestoApp;