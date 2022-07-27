import { StyleSheet, ActivityIndicator, Text, View, Button,Alert } from 'react-native'
import React from 'react'
import Home from "./src/screens/home/Home"
const App = () => {
  return (
    <View style={[styles.flexContainer]}>
      <Home />
      <Text>
        <ActivityIndicator size="large" color="red"/>
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
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
