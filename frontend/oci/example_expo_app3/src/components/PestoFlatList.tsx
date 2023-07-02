import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
// import { SafeAreaView} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

import { MD3DarkTheme, MD3Theme, useTheme } from 'react-native-paper';
import PestoMaskedView from './PestoMaskedView'; './PestoMaskedView'
import PestoTopBar, { PestoBottomBar } from './../../src/components/PestoBar'

export interface PestoFlatListProps {
    theme: typeof MD3DarkTheme;
}

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

// type ItemProps = {title: string, bernard: boolean;};
export interface ItemProps {title: string, bernard: boolean; michel: number;};

const Item = ({bernard, title}: ItemProps) => {
    const mainThemedStyles = getThemedStyles();
  return (<View style={mainThemedStyles.item}>
    <Text style={mainThemedStyles.title}>{bernard?title:'montiel'}</Text>
    <Text style={mainThemedStyles.container}>valeur de Bernard : [{`${bernard}`}]</Text>
  </View>);
};

const PestoFlatList = ( props: PestoFlatListProps) => {
    const mainThemedStyles = getThemedStyles();
    return (
        <SafeAreaView style={mainThemedStyles.container} >
            <PestoTopBar title='Pesto Top Bar'></PestoTopBar>
<PestoBottomBar title='Pesto Bottom Bar'></PestoBottomBar>
        <PestoMaskedView text='The Pesto Masked Text'></PestoMaskedView>
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} bernard michel={0.23} />}
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