import { StyleSheet, Text, ScrollView, Image, _Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VStack, Center, NativeBaseProvider, Stack, HStack, Box, View, Heading, Container } from "native-base";
import { collection, onSnapshot, orderBy, query, firestore, getDoc, doc } from 'firebase/firestore'
// import Humedad from './Parametros/Humedad';
// import { async } from '@firebase/util';
// import { Firestore, QuerySnapshot } from 'firebase/firestore';
import { database } from '../database/firebase';
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { async } from '@firebase/util';
import { render } from 'react-dom';



function StackOk() {

  const [humidity, setHumidity] = useState('')
  const [temperature, setTemperature] = useState('')
  const [hmin, setHmin] = useState('')
  const [hmax, setHmax] = useState('')
  const [tmin, setTmin] = useState('')
  const [tmax, setTmax] = useState('')

  function readRTH() {
    const db = getDatabase();
    const starCountRef = ref(db, 'parametros/' + '/state');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setHumidity(data.humidity)
      // console.log(humidity)
    });
  }

  function readRTT() {
    const db = getDatabase();
    const starCountRef = ref(db, 'parametros/' + '/state');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setTemperature(data.temperature)
      // console.log(temperature)
    });
  }
  function loadHume() {
    onSnapshot(doc(database, 'parametros', 'humedad'), (doc) => {
      setHmin(doc.data().HMin)
      setHmax(doc.data().HMax)
      console.log(doc.data())
    })
  }

  function loadTemp() {
    onSnapshot(doc(database, 'parametros', 'temperatura'), (doc) => {
      setTmin(doc.data().TMin)
      setTmax(doc.data().TMax)
      console.log(doc.data())

    })
  }
  // function loadParam() {
  //   const reference = database().ref('/humidity');
  //   reference.on('value', (snapshot => {
  //     console.log('User data: ', snapshot.val());})
  //   )
  // }

  // async function loadParam() {
  //   const collectionRef = collection(database, 'parametros')
  //   const q = query(collectionRef)
  //   const ud = onSnapshot(q, querySnapshot => {
  //     setParametros(
  //       querySnapshot.docs.map(doc => ({
  //         id: doc.id,
  //         HMin: doc.data().HMin,
  //         HMax: doc.data().HMax

  //       }))
  //     )
  //     console.log(parametros)
  //   })
  //   return ud
  // }
  useEffect(() => {
    loadHume()
    loadTemp()
    readRTH()
    readRTT()
  }, [])

  return (
    <Stack>
      <VStack space={9} alignItems="center">
        {/* {
          parametros != null &&
          <Text>Mantener parámetros entre {loadParam()}</Text>
        } */}
        <Text styles={styles.title}>HUMEDAD</Text>
        <Text>Mantener Humedad Entre {hmin}% y {hmax}%</Text>
        <HStack>
          <Box w="40" h="40" bg="#73b767" rounded="md" shadow={6} borderRadius="full" >
            <Image
              source={require("../../invernatron/assets/Logo_inv.png")}
              resizeMode="contain"
              style={styles.imageInv}
            />
            <Text style={styles.title}>{humidity}%</Text>
            {/* <Box w="40" h="40" bg="#73b767" rounded="md" shadow={6} borderRadius="full" /> */}
          </Box>
        </HStack>
        <Text>TEMPERATURA</Text>
        <Text>Mantener Temperatura Entre {tmin}°C y {tmax}°C</Text>
        <HStack>
          <Box Box w="40" h="40" bg="#73b767" rounded="md" shadow={6} borderRadius="full" >
            <Image
              source={require("../../invernatron/assets/Logo_inv.png")}
              resizeMode="contain"
              style={styles.imageInv}
            />
            <Text style={styles.title}>{temperature}°</Text>
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
  title2: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    textAlign: "center"
  },
  textTemp: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center"
  },


})
