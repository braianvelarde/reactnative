import React from 'react';
import {ImageBackground, StyleSheet, Image, View} from 'react-native';

import colors from '../config/colors';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            source={require("../assets/fondo.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image                 
                    source={require("../assets/rpereznet.png")}
                    style={styles.logo}
                ></Image>
                <AppText>Reinicio de canales</AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register" color="secondary"></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer:{
        padding: 20,
        width: "100%",
    },
    logo:{
        height: 150,
        width: 150,

    },
    logoContainer:{
        top: 100,
        alignItems: "center",
        position: "absolute",
    },
});

export default WelcomeScreen;
