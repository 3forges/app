// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3DarkTheme, MD3Theme, useTheme, Badge, IconButton } from 'react-native-paper';


export interface PestoNavigationPOCProps {
    theme: typeof MD3DarkTheme;
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>ça c'est le Screen de l'accueil la "Home"</Text>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>ça c'est le Screen de détail</Text>
      
    </View>
  );
}
const Stack = createNativeStackNavigator();

function PestoNavigationPOC(props: PestoNavigationPOCProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PestoNavigationPOC;