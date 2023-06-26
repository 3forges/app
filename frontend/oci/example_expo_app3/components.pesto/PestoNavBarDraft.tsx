import React from "react";
import { Text } from 'react-native';
import { 
  GluestackUIProvider,
  Center,
  Box,
  HStack,
  Button,
  Icon,
  GlobeIcon,
  SettingsIcon,
  MenuIcon,
  BellIcon,
 } from '../components';
import PestoMenu from "./PestoMenu";
import { config } from '../gluestack-ui.config';

export interface PestoNavBar {
    title: string;
    isCollapsed?: boolean; // hamburger menu collapse behavior
    logo?: string;
}

export default function PestoNavBar(props: PestoNavBar) {
    const [navBar, setNavBar] = React.useState<PestoNavBar>();
    if (navBar) {
    
    }else{
      setNavBar(props)
    }
    console.info(` - Début - Appel de la fonction Menu `)
    console.log(navBar)
    console.info(` - Fin - Appel de la fonction Menu `)
    const  handleOnMenuToggle = () => { 
        setNavBar({ title: navBar?.title || "please", isCollapsed: !navBar?.isCollapsed});
        console.info(` - Début - Appel de la fonction [handleOnMenuToggle] `)
        console.log(navBar)
        console.info(` - Fin - Appel de la fonction [handleOnMenuToggle] `)
    }
  return (

    <HStack space="none" reversed={false} >
      <Box bg='$blue300' > 
      <PestoMenu text={navBar?.title || 'ZePesto'}/>
      </Box>
      <Box bg='$blue400' >
        <PestoMenu text={'Projects'}/>
      </Box>
      <Box bg='$green200' > 
        
        <Button.Group style={{
          /*marginRight: 3,*/
          /*marginTop: 3,*/
          margin: 3,
          fontSize: "$sm", // fontSize="$sm"
          lineHeight: "$md" //lineHeight="$md"
        }} >
          <PestoMenu margin={3} text={navBar?.title || 'ZePesto'}/>
          <PestoMenu margin={3} text={'Projects'}/>
          <PestoMenu margin={3} text={'Profile'}/>
        </Button.Group>
      </Box>
    </HStack>


    );
  }
