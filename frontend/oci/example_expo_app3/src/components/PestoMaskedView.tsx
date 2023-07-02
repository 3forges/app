import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

export interface PestoFlatListProps {
    text: string;
}

const PestoMaskedView = (props: PestoFlatListProps) => {
  return (
    <MaskedView
      style={{ flex: 1, flexDirection: 'row', height: '100%' }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

          <Text
            style={{
              fontSize: 60,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            {props.text}
          </Text>

        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <Image
            
            source={{ uri: 'https://picsum.photos/100' }}
            style={styles.image}
            />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
      <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
    </MaskedView>
  );
}
const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
  });
export default PestoMaskedView