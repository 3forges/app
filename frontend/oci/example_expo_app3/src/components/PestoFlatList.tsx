import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable
} from 'react-native';
// import { SafeAreaView} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

import { MD3DarkTheme, MD3Theme, useTheme, Badge, IconButton } from 'react-native-paper';
import PestoMaskedView from './PestoMaskedView'; './PestoMaskedView'
import PestoTopBar, { PestoBottomBar } from './../../src/components/PestoBar'

export interface PestoFlatListProps {
    theme: typeof MD3DarkTheme;
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    picsum_id: 134
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    picsum_id: 197
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    picsum_id: 145
  },
];
import PestoCard from './PestoCard';

// type ItemProps = {title: string, bernard: boolean;};
export interface ItemProps {id: string, title: string, bernard: boolean; michel: number; picsum_id: number};
// const pesto_card_cover_uri = 'https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
// const pesto_card_cover_uri = 'https://picsum.photos/600/200'

const Item = ({id, bernard, title, picsum_id}: ItemProps) => {
    const mainThemedStyles = getThemedStyles();
  return (<View style={mainThemedStyles.item}>
    <Text style={mainThemedStyles.title}>{bernard?title:'montiel'}</Text>
    <Text style={mainThemedStyles.container}>valeur de Bernard : [{`${bernard}`}]</Text>
    <PestoCard title={`${title}`} cover_uri={`https://picsum.photos/id/${picsum_id}/600/200`} content='la description de ce produit, un voyage ?'></PestoCard>
  </View>);
};

export interface PressableBadgeProps {
    text: string;
}
const PressableBadge = (props: PressableBadgeProps) => {
    const  handleOnBadgePress = (action: string) => { 
        console.log('handleOnBadgePress action: '+action)
      }   
    return (
        <Pressable onPress={() => handleOnBadgePress(`super badge ${props.text}`)} >
        <Badge  theme={{ colors: { primary: 'green', secondary: 'orange', error: 'cyan' } }} >{props.text}</Badge>
        </Pressable>
    )
}

export interface PressableIconBtnProps {
    text: string;
}
const PressableIconBtn = (props: PressableIconBtnProps) => {
    const  handleOnIconBtnPress = (action: string) => { 
        console.log('handleOnIconBtnPress action: '+action)
      }   
    return (
        <Pressable onPress={() => handleOnIconBtnPress('editor')} >
        <IconButton mode={'contained'} animated={true}  theme={{ colors: { primary: 'green', secondary: 'orange', error: 'cyan' } }} icon="file-edit-outline"></IconButton>
        

        </Pressable>
    )
}



const PestoFlatList = ( props: PestoFlatListProps) => {
    const mainThemedStyles = getThemedStyles();
    return (
        <SafeAreaView style={mainThemedStyles.container} >
            <PestoTopBar title='Pesto Top Bar'></PestoTopBar>
<PestoBottomBar title='Pesto Bottom Bar'></PestoBottomBar>
        <PestoMaskedView text='The Pesto Masked Text'></PestoMaskedView>
        
        <PressableBadge text="Pesto Badge" ></PressableBadge>
        <PressableIconBtn text="Pesto Pressable Icon Btn"></PressableIconBtn>


        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} bernard michel={0.23} picsum_id={item.picsum_id} id={item.id} />}
            keyExtractor={item => item.id}
        />
        </SafeAreaView>
    );
};

const getThemedStyles = (/* mainPestoTheme: MD3Theme */) => {
    const mainPestoTheme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
            color: `${mainPestoTheme.colors.primary}`,
        },
        item: {
            // backgroundColor: '#f9c2ff',
            backgroundColor: `${mainPestoTheme.colors.secondary}`,
            color: `${mainPestoTheme.colors.primary}`,
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 32,
            color: `${mainPestoTheme.colors.primary}`,
        },
    });
    return styles;
}
export default PestoFlatList;