import * as React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { Button as PaperButton, Text as PaperText, Headline as PaperHeadline, Divider as PaperDivider } from 'react-native-paper';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { MD3Theme, useTheme, IconButton } from 'react-native-paper';
import { Theme } from '@react-navigation/native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import PestoCamera from './../camera/PestoCamera'
/**
 * 
 * see https://reactnavigation.org/docs/drawer-actions/
 * 
 */
function HomeScreen({ navigation }: any) {
  const pestoPaperTheme = useTheme()
  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <PaperHeadline>Welcome Home!</PaperHeadline>
      <PaperDivider theme={{...pestoPaperTheme, colors: { ...pestoPaperTheme.colors, tertiary: '$darkBlue' }}} />
      <PaperText theme={{...pestoPaperTheme, colors: { ...pestoPaperTheme.colors }}} >From the home screen, you can navigate to : </PaperText>
      <PaperDivider />
      <PaperButton theme={pestoPaperTheme} 
        buttonColor={pestoPaperTheme.colors.secondary}
        textColor={pestoPaperTheme.colors.tertiary}
        style={[
          styles.home_buttons,
          {
            backgroundColor: pestoPaperTheme.colors.secondary,
          },
        ]}
        children="Open Drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <PaperButton theme={pestoPaperTheme} 
        buttonColor={pestoPaperTheme.colors.secondary}
        textColor={pestoPaperTheme.colors.tertiary}
        style={[
          styles.home_buttons,
          {
            backgroundColor: pestoPaperTheme.colors.secondary,
          },
        ]}
        children="Toggle Drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <PaperButton theme={pestoPaperTheme} 
        buttonColor={pestoPaperTheme.colors.secondary}
        textColor={pestoPaperTheme.colors.tertiary}
        style={[
          styles.home_buttons,
          {
            backgroundColor: pestoPaperTheme.colors.secondary,
          },
        ]}
        children={"Jump to Profile"}
        onPress={() => navigation.dispatch(jumpToAction)}
      />
    </View>
  );
}

function ProfileScreen({ route }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile!</Text>
      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>
    </View>
  );
}

function PestoLogoDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />

    </DrawerContentScrollView>
  );
}
function CameraScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PestoCamera />
      
    </View>
  );
}


export interface PestoDrawerProps {
  theme: MD3Theme;
}
/**
 * converts the <code>paperTheme</code> 'react-native-paper' MD3DarkTheme  to a 'react-navigation/native'
 * @param paperTheme converts the <code>paperTheme</code> 'react-native-paper' MD3DarkTheme  to a 'react-navigation/native'
 */
export function paperToNavigationThemeConverter(paperTheme: MD3Theme): Theme {
  let convertedTheme: Theme = { 
    colors: {
      ...paperTheme.colors,
      card: paperTheme.colors.secondary, 
      text: paperTheme.colors.tertiary, 
      border: paperTheme.colors.tertiary, 
      notification: paperTheme.colors.secondary,
      // background: paperTheme.colors.tertiary
      background: paperTheme.colors.primaryContainer
    },
    dark: paperTheme.dark
  }
  return convertedTheme;
}

const Drawer = createDrawerNavigator();

export function PestoLogo(props: any) {
  return (
    <>    
        <DrawerContentScrollView {...props} bounces={true}>
          
        {
          /*
          <DrawerItem
            icon={({ size, color }) => (
              <Image
                source={require('../PestoLogo/assets/pesto.icon.svg')}
                style={{ width: size, height: size, tintColor: color }}
              />
            )}
            label="Pesto"
            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
          />
          */
        }
        <PaperButton
          icon={({ size, color }) => (
            <Image
              source={require('../PestoLogo/assets/pesto.icon.svg')}
              style={{ width: size, height: size, tintColor: color }}
            />
          )}
        >
          Pesto
        </PaperButton>
          <DrawerItemList {...props} />

        </DrawerContentScrollView>

        </>
  )
}
// import PestoLogo from '../PestoLogo/assets/PestoSvg'
export default function PestoDrawer(props: PestoDrawerProps) {
  return (
    <>
    { // <NavigationContainer> 
    }
    
    <NavigationContainer theme={paperToNavigationThemeConverter(props.theme)} >
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(drawerContentProps: DrawerContentComponentProps) => 
          {
            return (
              <>
                <PestoLogo {...drawerContentProps} />
              </>
            );
          }
        }
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Camera" component={CameraScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}






const styles = StyleSheet.create({
  home_buttons: {
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 3,
  }
});
