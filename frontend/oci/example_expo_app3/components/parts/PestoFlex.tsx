import React from "react";
// 1. import `NativeBaseProvider` component
import { 
    NativeBaseProvider, 
    Text, 
    Box, 
    Center, 
    ZStack, 
    Flex,
    Divider,
    Heading,
    ScrollView,
    VStack
} from "native-base";


export interface PestoFlex {
    name: string;
}

function PestoFlex(props: PestoFlex) {
  // 2. Use at the root of your app
  return (
<Box flex="1" safeAreaTop>
        <ScrollView>
          <VStack space={2.5} w="100%" px="3">
            {
            /* flexDirection -> row */
          }
            <Heading size="md">row</Heading>
            <Flex direction="row" mb="2.5" mt="1.5">
              <Center size="16" bg="primary.100" _text={{
              color: "coolGray.800"
            }}>
                100
              </Center>
              <Center size="16" bg="primary.200" _text={{
              color: "coolGray.800"
            }}>
                200
              </Center>
              <Center bg="primary.300" size="16" _text={{
              color: "coolGray.800"
            }}>
                300
              </Center>
              <Center size="16" bg="primary.400" _text={{
              color: "coolGray.800"
            }}>
                400
              </Center>
            </Flex>
            <Divider />
            {
            /* flexDirection -> column */
          }
            <Heading size="md">column</Heading>
  
            <Flex direction="column" mb="2.5" mt="1.5">
              <Center size="16" bg="primary.100" _text={{
              color: "coolGray.800"
            }}>
                100
              </Center>
              <Center size="16" bg="primary.200" _text={{
              color: "coolGray.800"
            }}>
                200
              </Center>
              <Center bg="primary.300" size="16" _text={{
              color: "coolGray.800"
            }}>
                300
              </Center>
              <Center size="16" bg="primary.400" _text={{
              color: "coolGray.800"
            }}>
                400
              </Center>
            </Flex>
            <Divider />
            {
            /* flexDirection -> row-reverse */
          }
            <Heading size="md">row-reverse</Heading>
            <Flex direction="row-reverse" mb="2.5" mt="1.5">
              <Center size="16" bg="primary.100" _text={{
              color: "coolGray.800"
            }}>
                100
              </Center>
              <Center size="16" bg="primary.200" _text={{
              color: "coolGray.800"
            }}>
                200
              </Center>
              <Center bg="primary.300" size="16" _text={{
              color: "coolGray.800"
            }}>
                300
              </Center>
              <Center size="16" bg="primary.400" _text={{
              color: "coolGray.800"
            }}>
                400
              </Center>
            </Flex>
            <Divider />
            {
            /* flexDirection -> column-reverse */
          }
            <Heading size="md">column-reverse</Heading>
            <Flex direction="column-reverse" mb="2.5" mt="1.5">
              <Center size="16" bg="primary.100" _text={{
              color: "coolGray.800"
            }}>
                100
              </Center>
              <Center size="16" bg="primary.200" _text={{
              color: "coolGray.800"
            }}>
                200
              </Center>
              <Center bg="primary.300" size="16" _text={{
              color: "coolGray.800"
            }}>
                300
              </Center>
              <Center size="16" bg="primary.400" _text={{
              color: "coolGray.800"
            }}>
                400
              </Center>
            </Flex>
            <Divider />
          </VStack>
        </ScrollView>
      </Box>
  );
}

export default PestoFlex;



function Example() {
    return 
  }