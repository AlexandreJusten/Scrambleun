import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    const [isNumber1, setIsNumber1] = useState(0)
    const [isNumber2, setIsNumber2] = useState(10)


    const [isScore, setIsScore] = useState(0);

    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}} >{isNumber1} of {isNumber2} words
                Score: {isScore}
            </Text>
            
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        textAlign:'center',
        marginLeft:25,
        marginTop:150
    }
   
});
