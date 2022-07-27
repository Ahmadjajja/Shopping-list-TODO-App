import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from "./src/screens/home/Home"
const App = () => {
  return (
    <View style={[styles.flexContainer]}>
      <Text>
        <Home/>
      </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  flexContainer:{
    justifyContent:center,
    alignItems:center,
    color:"red",
  }
})
