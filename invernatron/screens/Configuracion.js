import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

export default function Configuracion() {
  return (
    <ScrollView 
    centerContent
    style={styles.viewBody}
    >
      <Button
      buttonStyle={styles.button}
      title={"Parametros Humedad"}
      />
      
      <Button
      buttonStyle={styles.button}
      title={"Parametros Temperatura"}
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