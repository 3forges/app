import React from "react"
import { View, Text, StyleSheet, StyleProp, ViewStyle, NativeEventEmitter, Pressable, Image } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';

import { Button } from 'react-native-paper'
import { Colors } from "react-native/Libraries/NewAppScreen";
export interface PestoButtonProps {
  text: string;
  paperMode: number;
  iconAsset?: string;//
  paperIconName?: string;//
  onClick?: Function;
}

function PestoButton(props: PestoButtonProps) { 
  const debug: boolean = true
  debug && console.info(` - Début - Appel de la fonction [PestoButton] `)
  const [currentView, setCurrentView] = React.useState<PestoButtonProps>(); 

  const  handleOnButtonClick = (action: string) => { 
    console.log('currentView: '+action)
    props?.onClick?.(action)
  }   

  return ( 

        <Pressable onPress={() => handleOnButtonClick('editor')} >
          <Button icon="book-edit-outline" buttonColor='#0ab0ff' mode="outlined" onPress={() => handleOnButtonClick('editor')}>
            A Paper Button ?
          </Button>
        </Pressable>

  );
}

