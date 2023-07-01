import { StatusBar } from "expo-status-bar"
import React from "react";
import {
  StyleSheet,
  View,
  Text, 
  Pressable
} from "react-native";

import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledPressable = styled(Pressable)

import PestoBrowserView from "./pestoBrowserView";
import PestoEditor from "./pestoEditor"

export default function App() {
  const debug: boolean = true
  const [page, setPage] = React.useState<string>('browser')
  
  function navigate(action: string) {
    console.log('app: click '+action)
    if (action == 'editor') setPage('editor')
    if (action == 'projects') setPage('browser')
  }

  return (
  <StyledView className="mx-auto flex-1 items-center bg-gray-500 justify-center space-y-10">
    <StyledText className="text-xl text-white">Welcome to Home</StyledText>
    <StyledText className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
      Hello World
    </StyledText>
  <StyledView className="flex flex-row space-x-5">
      <StyledPressable onPress={() => navigate("projects")}>
        <StyledText className="text-lg text-black bg-white rounded-md px-4 py-2">
          Projects
        </StyledText>
      </StyledPressable>
      <StyledPressable onPress={() => navigate("editor")}>
        <StyledText className="text-lg text-black bg-white rounded-md px-4 py-2">
          Editor
        </StyledText>
      </StyledPressable>
    </StyledView>
  </StyledView>
  )
}




