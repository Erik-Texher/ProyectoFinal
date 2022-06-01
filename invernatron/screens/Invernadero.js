import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { VStack, Center, NativeBaseProvider, Stack, HStack, Box, View, Heading, Container } from "native-base";
import { setNestedObjectValues } from 'formik';



function StackOk() {
  return (
    <Stack>
      <VStack space={9} alignItems="center">
        <Text>Mantener parámetros entre HMin y HMax</Text>
        <HStack>
          <Box w="40" h="40" bg="#73b767" rounded="md" shadow={6} borderRadius="full" >
            <Image
              source={require("../../invernatron/assets/Logo_inv.png")}
              resizeMode="contain"
              style={styles.imageInv}
            />
            {/* <Box w="40" h="40" bg="#73b767" rounded="md" shadow={6} borderRadius="full" /> */}
          </Box>
        </HStack>
        <Text>Mantener parámetros entre TMin y TMax</Text>
        <HStack>
          <Box Box w="40" h="40" bg="#73b767" rounded="md" shadow={6} borderRadius="full" >
            <Image
              source={require("../../invernatron/assets/Logo_inv.png")}
              resizeMode="contain"
              style={styles.imageInv}
            />
            {/* <Box w="40" h="40" bg="#73b767" rounded="md" shadow={6} borderRadius="full" /> */}
          </Box>
        </HStack>
      </VStack>
    </Stack>
  )
}

export default function Invernadero() {
  return (
    <NativeBaseProvider>
      <View pb={10}>
        <View pr={0}>
          <Image
            source={require("../../invernatron/assets/Logo_inv.png")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View pl={0} >
          <Text style={styles.title}>INVERNATRON!</Text>
        </View>
      </View>
      <ScrollView centerContent style={styles.viewBody}>
        <Center flex={1} px="3">
          <StackOk />
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  )

}


const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30

  },
  image: {
    height: 150,
    width: "100%",
    marginBottom: 10,
  },
  imageInv: {
    height: 50,
    width: "100%",
    marginBottom: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center"
  },

})
