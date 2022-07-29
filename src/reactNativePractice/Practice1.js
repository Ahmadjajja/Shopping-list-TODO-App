import { StyleSheet, ActivityIndicator, Text, ScrollView, View, Button, Alert, Image, ImageBackground } from 'react-native';
import React from 'react'
import Home from '../screens/home/Home'
import Ahmadjajja from "../assets/guys.jpg"
const practice1 = () => {
    return (
        <View style={[styles.flexContainer]}>
            <Text style={{ margin: 50 }}>
                <ActivityIndicator size="large" color="red" />
            </Text>
            <Home />
            <Button
                title="Press me"
                color="#f194ff"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
            <Text style={{ margin: 20 }}>Images below here with all three methods:</Text>
            <Text style={{ margin: 20 }}>Plz Scroll to see All Images</Text>

            {/* <ImageBackground
                //method 1
                resizeMode='cover'
                style={{ height: 250, width: 500 }}
                source={require('../assets/guys.jpg')} >
                <Text style={{ color: "red", alignItems: 'center' }}>Ahmad jajja</Text>
            </ImageBackground> */}

            {/* <Image
                    //method 2
                    resizeMode='cover'
                    style={{ height: 250, width: 250 }}
                    source={Ahmadjajja} /> */}

            {/* <ImageBackground
                //method 3
                style={{ height: 250, width: 250 }}
                source={{ uri: 'data:image/jpeg;base64,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' }} >
                <Text>naveed sarwar</Text>
            </ImageBackground> */}


            <ScrollView style={{ marginBottom: 150 }}>
                <Image
                    //method 1
                    resizeMode='cover'
                    style={styles.img}
                    source={require('../assets/guys.jpg')} />

                <Image
                    //method 2
                    resizeMode='cover'
                    source={Ahmadjajja}
                    style={styles.img}
                    />

                <Image
                    //method 3
                    style={styles.img}
                    source={{ uri: "data:image/jpeg;base64,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" }}
                />
            </ScrollView>
        </View>
    )
}

export default practice1

const styles = StyleSheet.create({
    flexContainer: {
        justifyContent: "center",
        alignItems: "center",
        color: "red",
    },
    img: {
        borderRadius:100 / 2,
        height: 250,
        width: 250 ,
    },
})