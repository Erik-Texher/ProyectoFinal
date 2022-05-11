import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

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
    marginBottom: 10,
    textAlign: "center"

  }
})