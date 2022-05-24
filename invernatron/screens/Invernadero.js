import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { VStack, Center, NativeBaseProvider } from "native-base";

function StackOk() {
  return <VStack space={9} alignItems="center">
      <Center w="64" h="40" bg="#73b767" rounded="md" shadow={3}    />
      <Center w="64" h="40" bg="#73b767" rounded="md" shadow={3} />
    </VStack>;
}

export default function Invernadero() {
  return (
    <ScrollView
      centerContent
      style={styles.viewBody}
    >
      <Image
        source={require("../../invernatron/assets/Logo_inv.png")}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>INVERNATRON CUIDA TU HUERTO!</Text>

      <NativeBaseProvider>
            <Center flex={1} px="3">
                <StackOk />
            </Center>
          </NativeBaseProvider>
          

    </ScrollView>
    
  )
  
}


const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10
  },
  title:{
    fontWeight:"bold",
    fontSize: 30,
    marginBottom:10,
    textAlign:"center"
  },

})
