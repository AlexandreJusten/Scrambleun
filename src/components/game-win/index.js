import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function GameWin() {

    const [number, onChangeNumber] = React.useState('_  ');

    return (
        <View style={styles.container}>
            <Text style={{fontSize:40,textAlign:'center',marginLeft:25}}>{number}{number}{number}{number}{number}{number} </Text>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 60,
        marginTop:20


    },
    a1: {
        textAlign: 'center',
        fontSize: 40,
        
    },
    input1: {
        textAlign: 'center',
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 7,
        marginTop:20
    }
});
