import { View, Text, Button, Alert, Modal } from 'react-native'
import React from 'react'

const Practice2 = () => {

  // const [modalVisible, setModalVisible] = useState(false);
  Alert.alert('Hey Ahmad!')

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          // setModalVisible(!modalVisible);
        }}
      >
        <Button title="press me" />
        <Button title="press me" />
        <Button
          title="press me"
          onPress={() => {
            Alert.alert("Congratulations! you Pressed this buttton");
            // setModalVisible(!modalVisible);
          }} 
          />
        <Text>
          Practice2
        </Text>
      </Modal>
    </View>
  )
}

export default Practice2