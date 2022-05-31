import { StyleSheet, Text, View } from 'react-native'
import { Input, InputGroup, InputLeftAddon, InputRightAddon, Center, NativeBaseProvider, VStack } from "native-base";
import React, { useState } from 'react'
import { Button } from '@rneui/base';
import axios from 'axios'
import { useFormik } from 'formik';

export default function Temperatura() {

  const { values, isSubmitting, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      TMin: "",
      TMax: ""
    },
    onSubmit: values => {
      // Enviamos Valores a la BD
      console.log(values)
      // updateHumedad()
    },
  })

  const ParaTemp = () => {
    return (
      <VStack space={3} alignItems="center">
        <InputGroup w="80%" h="50px" m="1.5">
          <InputLeftAddon children={"Mínimo:"} />
          <Input w="50%" h="50px" placeholder="0 - 40" value={values.TMin} onChangeText={text => setFieldValue("TMin", text)} />
          {/* campo={e => setHMin(e)} */}
          <InputRightAddon children={"°C"} />
        </InputGroup>
        <InputGroup w="80%" h="50px" m="1.5">
          <InputLeftAddon children={"Máximo:"} />
          <Input w="50%" h="50px" placeholder="0 - 40" value={values.TMax} onChangeText={text => setFieldValue("TMax", text)} />
          <InputRightAddon children={"°C"} />
        </InputGroup>
        <Button buttonStyle={styles.button} title={"Guardar"} onPress={handleSubmit}
        // onPress={() => console.log("holiwi")}
        // onPress={updateHumedad}
        />
      </VStack>
    )
  };


  return (

    <NativeBaseProvider>
      <Text style={styles.title} >INGRESA UN RANGO DE TEMPERATURA EN °C</Text>
      <Center flex={1} px="1">
        <ParaTemp />
      </Center>
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