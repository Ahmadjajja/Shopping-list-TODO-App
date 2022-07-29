import { View, Text, TouchableOpacity , StyleSheet  } from 'react-native'
import React from 'react'
import IconEntypo from "react-native-vector-icons/dist/Entypo"
const ListItem = ({item , deleteItem}) => {
  return (
    <TouchableOpacity style={styles.ListItem}>
      <View style={styles.ListItemView}>
        <Text style={styles.ListItemText}>{item.text}</Text>
        <IconEntypo
        name="cross" 
        size={20} 
        color="firebrick" 
        onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  )
} 

export default ListItem

const styles = StyleSheet.create({
  ListItem:{
    padding:15,
    backgroundColor:'#ccc',
    borderBottomWidth:1,
    borderColor:"#eee",
    // marginVertical:10,
  },
  ListItemView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  ListItemText:{
    fontSize:18,
  }

})