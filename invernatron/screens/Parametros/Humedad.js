import { StyleSheet, Text, View } from 'react-native'
import { Input, InputGroup, InputLeftAddon, InputRightAddon, Center, NativeBaseProvider, VStack } from "native-base";
import React, { useState } from 'react'
import { Button } from '@rneui/base';
import axios from 'axios'
import { useFormik } from 'formik';
import firebase from '../../database/firebase';
import { async } from '@firebase/util';
import { database } from '../../database/firebase';
import { collection, addDoc, updateDoc, doc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore';


export default function Humedad() {

  // const [hMin , setHMin] = useState(values.HMin)
  // const [hMax, setHMax] = useState('')
  // // const [id_Humedad, setId_Humedad] = useState('')
  // const updateHumedad = async () => {
  //   const obj = { hMin, hMax }
  //   const respuesta = await axios.put('http://192.168.1.69/Api_Invernatron/', obj)
  //   alert(respuesta.data.msg)
  //   setHMin('')
  //   setHMax('')
  // }

  const { values, isSubmitting, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      HMin: "",
      HMax: ""
    },
    onSubmit: values => {
      // Enviamos Valores a la BD
      // console.log(values)
      updateHumedad()
    },
  })


  const updateHumedad = async (merge) => {
    const paramRef = doc(database, "parametros", 'humedad');
    await setDoc(paramRef, values, { merge: merge })
  }

  // const addHumedad = async () => {
  //   await addDoc(collection(database, 'parametros'), values);

  // }
  const ParaHum = () => {
    return (
      <VStack space={3} alignItems="center">
        <InputGroup w="80%" h="50px" m="1.5">
          <InputLeftAddon children={"Mínimo:"} />
          <Input w="50%" h="50px" placeholder="0 - 100" value={values.HMin} onChangeText={text => setFieldValue("HMin", text)} keyboardType="number-pad" />
          {/* campo={e => setHMin(e)} */}
          <InputRightAddon children={"% HR"} />
        </InputGroup>
        <InputGroup w="80%" h="50px" m="1.5">
          <InputLeftAddon children={"Máximo:"} />
          <Input w="50%" h="50px" placeholder="0 - 100" value={values.HMax} onChangeText={text => setFieldValue("HMax", text)} keyboardType="number-pad" />
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
        {/* <Text>{setHMin}</Text> */}
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