import { StyleSheet, Text, View } from 'react-native'
import { Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Center, NativeBaseProvider } from "native-base";
import React from 'react'
import { Button } from '@rneui/base';

const TempMi = () => {
  return <Stack alignItems="center">
    <InputGroup w={{
      base: "40%",
      md: "285"
    }}>
      <InputLeftAddon children={"Mínimo:"} />
      <Input w={{
        base: "70%",
        md: "100%"
      }} placeholder="10 - 25" />
      <InputRightAddon children={"°C"} />
    </InputGroup>
  </Stack>;
};

const TempMa = () => {
  return <Stack alignItems="center">
    <InputGroup w={{
      base: "40%",
      md: "285"
    }}>
      <InputLeftAddon children={"Máximo:"} />
      <Input w={{
        base: "70%",
        md: "100%"
      }} placeholder="25 - 47" />
      <InputRightAddon children={"°C"} />
    </InputGroup>
  </Stack>;
};

export default function Temperatura() {
  return (

    <NativeBaseProvider>
      <Text style={styles.title} >INGRESA UN RANGO DE TEMPERATURA EN °C</Text>
      <Center flex={1} px="1">
        <TempMi />
        <TempMa />
      </Center>
      <Button
        buttonStyle={styles.button}
        title={"Guardar"}
        onPress={() => console.log("Guardado en la BD")}
      />

    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center",
    marginTop: 20
  },
  button: {
    backgroundColor: "#73b767",
    borderColor: "#3e6339",
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 10
  },
})