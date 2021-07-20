import React, {useState} from 'react';
import {FlatList, Modal, View, Text, Button, StyleSheet, Alert} from 'react-native';

import Card from '../components/Card';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const channels = [
    {
        id:1,
        description: "VH1",
        image: require("../assets/vh1.png"),
        buttonText: "reiniciar",
    },
    {
        id:2,
        description: "TN",
        image: require("../assets/Todo_Noticias_2016.png"),
        buttonText: "reiniciar",
    },
    {
        id:3,
        description:"TV Pública",
        image: require("../assets/tvpublica.png"),
        buttonText: "reiniciar",
    }
];


const confirmAlert = () =>
Alert.alert("Confirmar", "Desea reinciar el canal" ,[
    {
        text: "No",
        onPress: () => console.log("cancelado"),
        style: "cancel",
    },
    {
        text: "Si",
        onPress: () =>console.log("reiniciado"),
        style: "OK"
    }
]);

function ChannelsScreen(props) {
    return (
        <>
        <Screen>
            <FlatList
                data={channels}
                keyExtractor={channel => channel.id.toString()}
                renderItem= {({item}) =>
                <Card
                    title={item.description}
                    image={item.image}
                    subTitle={item.buttonText}
                    onPress={confirmAlert}
                ></Card>
            }
            ItemSeparatorComponent={ListItemSeparator}
            >         
            </FlatList>
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView:{
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        padding:35,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})

export default ChannelsScreen;