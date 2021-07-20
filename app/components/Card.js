import React from 'react';
import {Image,View, StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function Card({title, subTitle, image, onPress}) {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={image}></Image>
            <AppText style={styles.title}>{title}</AppText>
            <AppButton title={subTitle} onPress={onPress}></AppButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor: colors.white,
        padding: 10,
        margin:10,
        alignItems: "center",
        overflow: "hidden",
        shadowColor: "grey",
        shadowOpacity: 0.2,
        shadowOffset:{height:3, width:2},
    },
    title:{
        fontWeight: "bold",        
    },
    image:{
        width:"50%",
        height: 100,
    },
})

export default Card;