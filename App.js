import { StyleSheet,Text,  View } from 'react-native'
import React from 'react'
import Practice1 from './src/reactNativePractice/Practice1'
import Practice2 from './src/reactNativePractice/Practice2'
const App = () => {
  
  return (
    <View style={[styles.flexContainer]}>
    <Practice2/>
    {/* <Practice1/> */}


    </View>
  )
}

export default App

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  }
})
