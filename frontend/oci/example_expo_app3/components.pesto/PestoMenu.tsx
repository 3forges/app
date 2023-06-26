import React from "react";
import { Text } from 'react-native';
import { 
  GluestackUIProvider,
  Center,
  Box,
  Menu,
  Button,
  Heading,
  HStack,
  Icon,
  GlobeIcon,
  //PuzzleIcon,
  // PaintBucket,
  SettingsIcon,
  MenuIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  EditIcon,
  CopyIcon,
  RemoveIcon,
  PaperclipIcon,
  AddIcon,
  ShareIcon,
  EyeIcon,
  VStack
 } from '../components';
import { config } from '../gluestack-ui.config';

export interface PestoMenu {
    text: string;
    isCollapsed?: boolean;
    margin?: number;
}

export default function PestoMenu(props: PestoMenu) {
    const [menu, setMenu] = React.useState<PestoMenu>();
    if (menu) {
    
    } else {
      // here set default values, before setting state
      setMenu(props)
    }
    console.info(` - Début - Appel de la fonction Menu `)
    console.log(menu)
    console.info(` - Fin - Appel de la fonction Menu `)
    const  handleOnMenuToggle = () => { 
        setMenu({ text: menu?.text || "please", isCollapsed: !menu?.isCollapsed});
        console.info(` - Début - Appel de la fonction [handleOnMenuToggle] `)
        console.log(menu)
        console.info(` - Fin - Appel de la fonction [handleOnMenuToggle] `)
    }
  return (
    <Menu
placement={"top"}
  // eslint-disable-next-line react/no-unstable-nested-components
  trigger={({ ...triggerProps }) => {
    return (
      <Button style={{
        /*marginRight: 3,*/
        /*marginTop: 3,*/
        margin: menu?.margin,
        fontSize: "$sm", // fontSize="$sm"
        lineHeight: "$md" //lineHeight="$md"
      }}  {...triggerProps}>
        <Button.Text>{menu?.text}</Button.Text>
      </Button>
    );
  }}
>
  <Menu.Item key="Community" textValue="Community">
    <HStack style={{
          fontSize: "$sm", // fontSize="$sm"
          lineHeight: "$md" //lineHeight="$md"
        }} space="sm" alignItems="center">
      <Icon as={GlobeIcon} size="sm" />
      <Text >
        Community
      </Text>
    </HStack>
  </Menu.Item>
  <Menu.Item key="Plugins" textValue="Plugins">
    <HStack style={{
          fontSize: "$sm", // fontSize="$sm"
          lineHeight: "$md" //lineHeight="$md"
        }} space="sm" alignItems="center">
      <Icon as={RemoveIcon} size="sm" />
      <Text>
        Plugins
      </Text>
    </HStack>
  </Menu.Item>
  <Menu.Item key="Theme" textValue="Theme">
    <HStack style={{
          fontSize: "$sm", // fontSize="$sm"
          lineHeight: "$md" //lineHeight="$md"
        }} space="sm" alignItems="center">
      <Icon as={EditIcon} size="sm" />
      <Text >
        Theme
      </Text>
    </HStack>
  </Menu.Item>
  <Menu.Item key="Settings" textValue="Settings">
    <HStack style={{
          fontSize: "$sm", // fontSize="$sm"
          lineHeight: "$md" //lineHeight="$md"
        }} space="sm" alignItems="center">
      <Icon as={SettingsIcon} size="sm" />
      <Text >
        Settings
      </Text>
    </HStack>
  </Menu.Item>
  <Menu.Item key="Add account" textValue="Add account">
    <HStack style={{
          fontSize: "$sm", // fontSize="$sm"
          lineHeight: "$md" //lineHeight="$md"
        }}  space="sm" alignItems="center">
      <Icon as={AddIcon} size="sm" />
      <Text>
        Add account
      </Text>
    </HStack>
  </Menu.Item>
</Menu>
    );
  }
