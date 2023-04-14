import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Main() {

    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.a1} >Scrambleun</Text>
           
            <Text style={{marginTop:20}}>Unscramble the word using all the letters</Text>

            <TextInput
                style={styles.input1}
                onChangeText={onChangeNumber}
                value={number}
                

            />
            <Text>
           
            </Text>
            <Button
                onPress={console.log('click')}
                title="Skip"
                color="#8c8c8c"
                accessibilityLabel="Skip"
               
            /><Text>
           
            </Text>
            <Button
                onPress={console.log('click')}
                title="Submit"
                color="#3B71CA"
                accessibilityLabel="Submit"
                
            />
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
