import { StyleSheet, Text, View } from 'react-native'
import { Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Center, NativeBaseProvider } from "native-base";
// import React from 'react'
import React, { useState } from 'react'
import { Button } from '@rneui/base';
import axios from 'axios'

// const [hMin, setHMin] = useState("")
// const [hMax, setHMax] = useState('')
// const [id_Humedad, setId_Humedad] = useState('')

// const updateHumedad = async() => {
//   const obj = {id_Humedad, hMin, hMax} 
//   const respuesta = await axios.put('http://192.168.1.69/Api_Invernatron/',obj)
//   alert(respuesta.data.msg)
//   setId_Humedad('') 
//   setHMin('')
//   setHMax('')
// } 

const HumeMi = () => {
  return <Stack alignItems="center">
    <InputGroup w={{
      base: "40%",
      md: "285"
    }}>
      <InputLeftAddon children={"Mínimo:"} />
      <Input w={{
        base: "70%",
        md: "100%"
      }} placeholder="0 - 100" 
      // campo={e=>setHMin(e)}
      />
      <InputRightAddon children={"% HR"} />
    </InputGroup>
  </Stack>;
};

const HumeMa = () => {
  return <Stack alignItems="center">
    <InputGroup w={{
      base: "40%",
      md: "285"
    }}>
      <InputLeftAddon children={"Máximo:"} />
      <Input w={{
        base: "70%",
        md: "100%"
      }} placeholder="0 - 100" 
      // campo={e=>setHMax(e)}
      />
      <InputRightAddon children={"% HR"} />
    </InputGroup>
  </Stack>;
};

export default function Humedad() {
  return (
    <NativeBaseProvider>
      <Text style={styles.title} >INGRESA UN RANGO DE HUMEDAD EN %HR</Text>
      <Center flex={1} px="1">
        <HumeMi />
        <HumeMa />
      </Center>
      <Button
        buttonStyle={styles.button}
        title={"Guardar"}
        onPress={()=>console.log("holiwi")}
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