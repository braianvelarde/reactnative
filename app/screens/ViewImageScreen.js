import React from 'react';
import {Image, StyleSheet ,View} from 'react-native'

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeButton}></View>
            <View style={styles.eraseButton}></View>
            <Image
                resizeMode="contain"
                source={require("../assets/descarga.jpg")}
                style={styles.imagen}
            >          
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000",
    },
    closeButton:{
        backgroundColor: colors.close,
        position:"absolute",
        height: 40,
        width: 40,
        top: 40,
        left: 20,
    },
    eraseButton:{
        backgroundColor: colors.erase,
        position:"absolute",
        height: 40,
        width: 40,
        top: 40,
        right: 20,
    },
    imagen:{
        width: "100%",
        height: "100%",
    },
})

export default ViewImageScreen;