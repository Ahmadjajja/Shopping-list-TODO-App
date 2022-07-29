import { StyleSheet, View, Text, Button, Alert, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Practice2 = () => {

  // const [modalVisible, setModalVisible] = useState(false);
  // Alert.alert('Hey Ahmad!')
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View>
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          // setModalVisible(!modalVisible);
        }}
      > */}
        {/* <Button title="press me" /> */}
        {/* <Button title="press me" />
        <Button
          title="press me"
          onPress={() => {
            Alert.alert("Congratulations! you Pressed this me");
            // setModalVisible(!modalVisible);
          }}
        /> */}
        {/* <Text>
          Practice2
        </Text> */}
      {/* </Modal> */}
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      </View>

    </View>


    // </View >
  )
}

export default Practice2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    justifyContent:"center",
    flex:1,
    padding: 10
  }
});
