import { StyleSheet, Text, View } from 'react-native'
import { Input, InputGroup, InputLeftAddon, InputRightAddon, Center, NativeBaseProvider, VStack } from "native-base";
import React, { useState } from 'react'
import { Button } from '@rneui/base';
import axios from 'axios'
import { useFormik } from 'formik';


export default function Humedad() {

  const [hMin, setHMin] = useState('')
  const [hMax, setHMax] = useState('')
  // const [id_Humedad, setId_Humedad] = useState('')

  const updateHumedad = async () => {
    const obj = { hMin, hMax }
    const respuesta = await axios.put('http://192.168.1.69/Api_Invernatron/', obj)
    alert(respuesta.data.msg)
    setHMin('')
    setHMax('')
  }

  const { values, isSubmitting, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      setHMin: "",
      setHMax: ""
    },
    onSubmit: values => {
      // Enviamos Valores a la BD
      console.log(values)
      updateHumedad()
    },
  })
  const ParaHum = () => {
    return (
      <VStack space={3} alignItems="center">
        <InputGroup w="80%" h="50px" m="1.5">
          <InputLeftAddon children={"Mínimo:"} />
          <Input w="50%" h="50px" placeholder="0 - 100" value={values.setHMin} onChangeText={text => setFieldValue("setHMin", text)} />
          {/* campo={e => setHMin(e)} */}
          <InputRightAddon children={"% HR"} />
        </InputGroup>
        <InputGroup w="80%" h="50px" m="1.5">
          <InputLeftAddon children={"Máximo:"} />
          <Input w="50%" h="50px" placeholder="0 - 100" value={values.setHMax} onChangeText={text => setFieldValue("setHMax", text)} />
          <InputRightAddon children={"% HR"} />
        </InputGroup>
        <Button buttonStyle={styles.button} title={"Guardar"} onPress={handleSubmit}
        // onPress={() => console.log("holiwi")}
        // onPress={updateHumedad}
        />
      </VStack>
    )
  }


  return (
    <NativeBaseProvider>
      <Text style={styles.title} >INGRESA UN RANGO DE HUMEDAD EN %HR</Text>
      <Center flex={1} px="1">
        <ParaHum />
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