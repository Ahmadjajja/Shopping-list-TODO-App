import { Text, StyleSheet, View, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
// import { uuidv4 } from 'uuidv4';
// import Practice1 from './src/reactNativePractice/Practice1'
// import Practice2 from './src/reactNativePractice/Practice2'
import Header from "./src/components/header/Header"
import ListItem from "./src/components/listItem/ListItem"
import AddItem from "./src/components/AddItem/AddItem"
const App = () => {
  const [items, setItems] = useState([
    { id: Math.random().toString(36).slice(2), text: 'Milk' },
    { id: Math.random().toString(36).slice(2), text: 'Eggs' },
    { id: Math.random().toString(36).slice(2), text: 'Bread' },
    { id: Math.random().toString(36).slice(2), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    });
  }
  const addItem = text => {
    if (!text) { 
      Alert.alert('Error','Please enter an item',[{text:'Ok'} ])
    } else {
      setItems(prevItems => {
        return [{id:Math.random().toString(36).slice(2),text},...prevItems];
      })
    }
  }
  return (
    <View style={styles.flexContainer}>
      {/* <Practice2/> */}
      {/* <Practice1/> */}
      <Header />
      <AddItem  addItem= {addItem}/>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem = {deleteItem} />
        )}
      />


    </View>
  )
}

export default App

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    // paddingTop:0,
  }
})
