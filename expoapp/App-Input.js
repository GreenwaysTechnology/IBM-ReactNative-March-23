import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,Alert } from 'react-native';

export default function App() {
    const [text, setText] = useState('defaultName');

    const update = name => {
        setText(name)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Enter Name : {text}</Text>
            <TextInput style={styles.input} onChangeText={update} value={text} />
            <Button title='GetName' onPress={() => {
                Alert.alert(text);
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 25,
        color: 'red'
    },
    input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'pink'
    }
});
