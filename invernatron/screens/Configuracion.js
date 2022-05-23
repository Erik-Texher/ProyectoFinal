import { ScrollView, StyleSheet, Text } from 'react-native'
import React, { Component } from 'react'
import { Button } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

export default function Configuracion() {
  const navigation=useNavigation()

  return (
    <ScrollView 
    centerContent
    style={styles.viewBody}
    >
      <Button
      buttonStyle={styles.button}
      title={"Parametros Humedad"}
      onPress={()=>console.log("click!")}
      />
      
      <Button
      buttonStyle={styles.button}
      title={"Parametros Temperatura"}
      onPress={()=>console.log("click!")}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30
  },
  button:{
    backgroundColor:"#73b767",
    borderColor: "#3e6339",
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 10
    
  }
})