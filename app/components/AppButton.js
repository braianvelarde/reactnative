import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: colors[color]} ]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        width:"100%",
        borderRadius: 30,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
    },
    text:{
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold"
    }

})
export default AppButton;